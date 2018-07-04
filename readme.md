# Coordinate

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@behaver/angle) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

## 简介

Coordinate 组件库可被用于 坐标的变换 和 坐标系统的转换 等。

组件库又分成了两个子库：2D 和 3D，其中 2D 库负责平面坐标的处理，3D 库负责空间坐标的处理。

Coordinate 组件库目前主要支持以下坐标变换操作：

* 平移
* 缩放
* 旋转
* 手性翻转
* 系统切换

其中 2d 组件库目前支持以下坐标系统：

* 直角坐标系(RC)
* 极坐标系(PC)

3d 组件库目前支持以下坐标系统：

* 直角坐标系(RC)
* 柱面坐标系(CC)
* 球坐标系(SC)

## 组件

Coordinate 2D 库包含以下组件：

* `SystemSwitcher2D` 平面坐标系统转换组件
* `Transformer2D` 平面坐标变换组件
* `BaseCoordinate2D` 平面坐标基类
* `Coordinate2D` 平面坐标组件
* `RectangularCoordinate2D` 平面直角坐标组件
* `PolarCoordinate2D` 平面极坐标组件

![Coordinate2D](/doc/img/coordinate-2d.png "Coordinate 2d 组件库类图")

Coordinate 3D 库包含以下组件：

* `SystemSwitcher3D` 空间坐标系统转换组件
* `Transformer3D` 空间坐标变换组件
* `BaseCoordinate3D` 空间坐标基类
* `Coordinate3D` 空间坐标组件
* `RectangularCoordinate3D` 空间直角坐标组件
* `CylindricalCoordinate3D` 空间柱面坐标组件
* `SphericalCoordinate3D` 空间球坐标组件

![Coordinate3D](/doc/img/coordinate-3d.png "Coordinate 3d 组件库类图")

## 用例

使用 npm 安装组件库，在项目目录下执行：

`npm install @behaver/coordinate`

Coordinate 组件调用：

```js
const { SphericalCoordinate3D, PolarCoordinate2D } = require('@behaver/coordinate');

// 实例化一个球坐标 (10, π / 3, π)
let sc = new SphericalCoordinate3D(10, Math.PI / 3, Math.PI);
```

当只使用 3D 库中涉及的组件时（2D 库同理），可以使用如下方式调用：

```js
// 3d 库组件调用
const { SphericalCoordinate3D, RectangularCoordinate3D } = require('@behaver/coordinate/3d');

// 2d 库组件调用
const { PolarCoordinate2D, RectangularCoordinate2D } = require('@behaver/coordinate/2d');
```

---

使用 Coordinate3D 组件处理空间坐标：

```js
let c3d = new Coordinate;

// 设定初始球面坐标
// 等同于 new Coordinate(10, Math.PI / 3, Math.PI, 'sc');
c3d.sc(10, Math.PI / 3, Math.PI);

// 将坐标 x, y, z 轴分别平移 2, 3, -4，然后以直角向量 (1, 1, 1) 为轴旋转 90°，最后转换为柱面坐标并输出结果。
let cc = c3d.translate(2, 3, -4).rolateVector(Math.PI / 2, 1, 1, 1).toCC().equal();
```

*\*Coordinate2D 的使用与此相同。*

---

使用 SphericalCoordinate3D 组件处理空间球坐标：

```js
let sc = new SphericalCoordinate3D(10, Math.PI / 3, Math.PI);

// 将坐标围绕 x 轴旋转 60°，转换为直角坐标，输出结果
let rc = sc.rotateX(Math.PI / 3).toRC().equal();
```

*\*用于处理空间直角坐标的 RectangularCoordinate3D 组件 和 用于处理空间柱面坐标的 CylindricalCoordinate3D 组件 的使用方法相同*

---

使用 PolarCoordinate2D 组件处理平面极坐标：

```js
let pc = new PolarCoordinate2D(10, Math.PI / 3);

// 将坐标 x 方向缩放 0.2 倍，y 方向缩放 3 倍，转换为直角坐标，输出结果
let rc = pc.scale(0.2, 3).toRC().equal();
```

*\*处理平面直角坐标的 RectangularCoordinate2D 组件 使用方法相同*

---

使用 SystemSwitcher3D 将3维空间坐标点进行坐标系统间的转换：

```js
let ssp3d = new SystemSwitcher3D(3, 0, 4.5);

// 将直角系(RC)坐标 (3, 0, 4.5) 转换到 球坐标系(SC)
let SC = ssp3d.toSC();

// 转换到 柱面坐标系(CC)
let { rho, phi, z } = ssp3d.toCC();

// 柱面坐标系(CC)坐标 转换到 直角坐标系(RC)
let RC = ssp3d.fromCC(rho, phi, z).toRC();
```

SystemSwitcher3D 目前支持的坐标系统包括：

* 直角坐标系(RC)
* 柱面坐标系(CC)
* 球坐标系(SC)

*\*SystemSwitcher2D 的使用方法与 SystemSwitcher3D 类同，具体可见 API 说明。*

SystemSwitcher2D 目前支持的坐标系统包括：

* 直角坐标系(RC)
* 极坐标系(PC)

---

使用 Transformer3D 对3维空间直角系坐标点进行变换操作：

```js
let tp3d = new Transformer3D(3, 0, 4.5);

let res = tp3d
	.rotateZ(Math.PI / 4) // 绕 Z 轴旋转 45°
	.scale(2, 0, 0.5) // x 轴方向缩放 2 倍，z 轴方向缩放 1 / 2 倍
	.translate(1, 2, 3) // 通过平移向量（1, 2, 3）进行平移
	.equal();
```

*\*Transformer2D 的使用方法与 Transformer3D 类同，具体可见 API 说明。*

## API

### Coordinate 2D 库组件：

#### SystemSwitcher2D 平面坐标系统转换 组件

`from(a, b, system = 'rc')` 设定起始平面坐标

system 参数用于指定坐标的系统类型，可设定值有：'rc' 直角坐标系 和 'pc' 极坐标系

`to(system)`  转换平面坐标至给定坐标系统

system 参数用于指定坐标的系统类型，可设定值有：'rc' 直角坐标系 和 'pc' 极坐标系

`fromRC(x, y)` 设定起始平面直角坐标

`toRC()` 转换平面坐标至直角坐标系

`fromPC(rho, theta)` 设定起始平面极坐标

`toPC()` 转换平面坐标至极坐标系

---

#### Transformer2D 平面坐标变换 组件

`from(x, y)` 设定变换起始平面直角坐标

`equal()` 输出变换结果

`translate(dx, dy)` 平移坐标

参数 dx, dy 分别是为 x, y 轴方向的平移量。

`scale(sx, sy)` 缩放坐标

参数 sx, sy 分别是为 x, y 轴方向的缩放量。

`rotate(angle, pivot = { x: 0, y: 0 })` 旋转坐标

参数 angle 指定旋转角度
参数 pivot 指定旋转轴心点坐标，默认绕原点旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

参数 axis 指定反演轴，可选参数：'x'、'y'，缺省值为：'y'

---

#### BaseCoordinate2D 平面坐标处理 基类

*参数详情见 SystemSwitcher2D 和 Transformer2D API文档*

`from(a, b, system = 'rc')` 设定起始坐标 (a, b)

`translate(dx, dy)` 坐标平移

`scale(sx, sy)` 坐标缩放

`rotate(angle, pivot = { x: 0, y: 0 })` 坐标旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

`equal()` 获取最终变换结果坐标

---

#### Coordinate2D 平面坐标处理 组件

*在 BaseCoordinate2D 接口之上，另有：*

`rc(x, y)` 设定起始直角坐标 (x, y)

`pc(rho, theta)` 设定起始极坐标 (ρ, θ)

`toRC()` 转换坐标至直角坐标系

`toPC()` 转换坐标至极坐标系

---

#### RectangularCoordinate2D 平面直角坐标处理 组件

*在 BaseCoordinate2D 接口之上，另有：*

`from(x, y)` 设定起始平面直角坐标 (x, y)

`toPC()` 转换坐标至极坐标系

---

#### PolarCoordinate2D 平面极坐标处理 组件

*在 BaseCoordinate2D 接口之上，另有：*

`from(rho, theta)` 设定起始平面极坐标 (ρ, θ)

`toRC()` 转换坐标至直角坐标系

---

### Coordinate 3D 库组件：

#### SystemSwitcher3D 空间坐标系统转换 模块

`from(a, b, c, system = 'rc')` 设定起始空间坐标

system 参数用于指定坐标的系统类型，可设定值有：

* 'rc' 直角坐标系
* 'cc' 柱面坐标系
* 'sc' 球坐标系

`to(system)` 转换空间坐标至给定坐标系统

`fromRC(x, y, z)` 设定起始空间直角坐标

`toRC()` 转换空间坐标至直角坐标系

`fromCC(r, theta, z)` 设定起始空间柱面坐标

`toCC()` 转换空间坐标至柱面坐标系

`fromSC(r, theta, phi)` 设定起始空间球坐标

`toSC()` 转换空间坐标至球坐标系

---

#### Transformer3D 空间坐标变换 模块

`from(x, y, z)` 设定变换起始空间直角坐标

`equal()` 输出变换结果

`translate(dx, dy, dz)` 平移坐标

参数 dx, dy, dz 分别是为 x, y, z 轴方向的平移量。

`scale(sx, sy, sz)` 缩放坐标

参数 sx, sy, sz 分别是为 x, y, z 轴方向的缩放量。

`rotateX(angle)` 绕 X 轴旋转坐标

`rotateY(angle)` 绕 Y 轴旋转坐标

`rotateZ(angle)` 绕 Z 轴旋转坐标

`rotateVector(angle, x, y, z)` 绕任意轴旋转坐标（四元数旋转法）

参数 x, y, z 指定旋转绕轴向量坐标

`rotate(angle, { axis, axialVector })` 旋转坐标

可选参数 options.axis 用于指定旋转轴，可选值：'x', 'y' 和 'z'。
可选参数 options.axialVector 用于指定旋转轴向量，参考格式：{ x: 1, y: 1, z: 1 }
参数 options.axialVector 的设定执行优先于参数 options.axis
本方法默认缺省绕 Z 轴旋转坐标

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

参数 axis 指定反演轴，可选参数：'x'、'y'，缺省值为：'y'

---

#### BaseCoordinate3D 空间坐标处理 基类

*参数详情见 SystemSwitcher3D 和 Transformer3D API文档*

`from(a, b, c, system = 'rc')` 设定起始坐标 (a, b, c)

`translate(dx, dy, dz)` 坐标平移

`scale(sx, sy, sz)` 坐标缩放

`rotateX(angle)` 坐标绕 X 轴旋转

`rotateY(angle)` 坐标绕 Y 轴旋转

`rotateZ(angle)` 坐标绕 Z 轴旋转

`rotateVector(angle, x, y, z)` 坐标绕 任意轴 旋转

`rotate(angle, { axis, axialVector } = { axis: 'z' })` 坐标旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

`equal()` 获取最终变换结果坐标

---

#### Coordinate3D 空间坐标处理 组件

*在 BaseCoordinate3D 接口之上，另有：*

`rc(x, y, z)` 设定起始直角坐标 (x, y, z)

`cc(rho, phi, z)` 设定起始柱面坐标 (ρ, φ, z)

`sc(r, theta, phi)` 设定起始球坐标 (r, θ, φ)

`toRC()` 转换坐标至直角坐标系

`toCC()` 转换坐标至柱面坐标系

`toSC()` 转换坐标至球极坐标系

---

#### RectangularCoordinate3D 空间直角坐标处理 组件

*在 BaseCoordinate3D 接口之上，另有：*

`from(x, y, z)` 设定起始空间直角坐标 (x, y, z)

`toCC()` 转换坐标至柱面坐标系

`toSC()` 转换坐标至球极坐标系

---

#### CylindricalCoordinate3D 空间直角坐标处理 组件

*在 BaseCoordinate3D 接口之上，另有：*

`from(rho, phi, z)` 设定起始空间柱面坐标 (ρ, φ, z)

`toRC()` 转换坐标至直角坐标系

`toSC()` 转换坐标至球极坐标系

---

#### SphericalCoordinate3D 空间直角坐标处理 组件

*在 BaseCoordinate3D 接口之上，另有：*

`from(r, theta, phi)` 设定起始空间球坐标 (r, θ, φ)

`toRC()` 转换坐标至直角坐标系

`toCC()` 转换坐标至柱面坐标系

---

## 许可证书

The MIT license.
