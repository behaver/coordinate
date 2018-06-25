# Coordinate

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@behaver/angle) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

## 简介

Coordinate 组件库可被用于 坐标变换 和 坐标系统转换 等。

## 功能

1. 空间坐标点的平移、缩放和旋转
2. 空间坐标系统转换
3. 平面坐标点的平移、缩放和旋转
4. 平面坐标系统转换

## 用例

使用 SystemSwitcherPoint3D 将3维空间坐标点进行坐标系统间的转换：

```js
let ssp3d = new SystemSwitcherPoint3D(3, 0, 4.5);

// 将直角系(RC)坐标 (3, 0, 4.5) 转换到 球坐标系(SC)
let pointSC = ssp3d.toSC();

// 转换到 柱面坐标系(CC)
let { r, theta, z } = ssp3d.toCC();

// 柱面坐标系(CC)坐标 转换到 直角坐标系(RC)
let pointRC = ssp3d.fromCC(r, theta, z).toRC();
```

SystemSwitcherPoint3D 目前支持的坐标系统包括：
* 直角坐标系(RC)
* 柱面坐标系(CC)
* 球坐标系(SC)

SystemSwitcherPoint2D 的使用方法与 SystemSwitcherPoint3D 类同，具体可见 API 说明。

SystemSwitcherPoint2D 目前支持的坐标系统包括：
* 直角坐标系(RC)
* 极坐标系(PC)

---

使用 TransformerPoint3D 对3维空间直角系坐标点进行变换操作：

```js
let tp3d = new TransformerPoint3D(3, 0, 4.5);

let res = tp3d
	.rotateZ(Math.PI / 4) // 绕 Z 轴旋转 45°
	.scale(2, 0, 0.5) // x 轴方向缩放 2 倍，z 轴方向缩放 1 / 2 倍
	.translate(1, 2, 3) // 通过平移向量（1, 2, 3）进行平移
	.equal();
```

TransformerPoint2D 的使用方法与 TransformerPoint3D 类同，具体可见 API 说明。

## API

### SystemSwitcherPoint2D 平面坐标系统转换 模块

`from(a, b, system = 'rc')` 设定起始平面坐标

system 参数用于指定坐标的系统类型，可设定值有：'rc' 直角坐标系 和 'pc' 极坐标系

`to(system)`  转换平面坐标至给定坐标系统

system 参数用于指定坐标的系统类型，可设定值有：'rc' 直角坐标系 和 'pc' 极坐标系

`fromRC(x, y)` 设定起始平面直角坐标

`toRC()` 转换平面坐标至直角坐标系

`fromPC(rho, theta)` 设定起始平面极坐标

`toPC()` 转换平面坐标至极坐标系

---

### TransformerPoint2D 平面坐标变换 模块

`from(x, y)` 设定变换起始平面直角坐标

`equal()` 输出变换结果

`translate(dx, dy)` 平移坐标

参数 dx, dy 分别是为 x, y 轴方向的平移量。

`scale(sx, sy)` 缩放坐标

参数 sx, sy 分别是为 x, y 轴方向的缩放量。

`rotate(angle, pivot = { x: 0, y: 0 })` 旋转坐标

参数 angle 指定旋转角度
参数 pivot 指定旋转轴心点坐标，默认绕原点旋转

---

### SystemSwitcherPoint3D 空间坐标系统转换 模块

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

### TransformerPoint3D 空间坐标变换 模块

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

## 许可证书

The MIT license.
