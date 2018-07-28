# Coordinate

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@behaver/coordinate) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

## 简介

Coordinate 组件库可被用于 坐标的变换 和 坐标系统的转换 等。

组件库又分成了两个子库：2D 和 3D，其中 2D 库用于平面坐标的处理，3D 库用于空间坐标的处理。

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

### Coordinate 2D 库组件：

* [SystemSwitcher2D](./doc/2d/SystemSwitcher2D.md) 平面坐标系统转换组件
* [Transformer2D](./doc/2d/Transformer2D.md) 平面坐标变换组件
* BaseCoordinate2D(私有类) 平面坐标基类
* [RectangularCoordinate2D](./doc/2d/RectangularCoordinate2D.md) 平面直角坐标组件
* [PolarCoordinate2D](./doc/2d/PolarCoordinate2D.md) 平面极坐标组件

![Coordinate2D](/doc/img/coordinate-2d.png "Coordinate 2d组件类图")

---

### Coordinate 3D 库组件：

* [SystemSwitcher3D](./doc/3d/SystemSwitcher3D.md) 空间坐标系统转换组件
* [Transformer3D](./doc/3d/Transformer3D.md) 空间坐标变换组件
* BaseCoordinate3D(私有类） 空间坐标基类
* [RectangularCoordinate3D](./doc/3d/RectangularCoordinate3D.md) 空间直角坐标组件
* [CylindricalCoordinate3D](./doc/3d/CylindricalCoordinate3D.md) 空间柱面坐标组件
* [SphericalCoordinate3D](./doc/3d/SphericalCoordinate3D.md) 空间球坐标组件

![Coordinate3D](/doc/img/coordinate-3d.png "Coordinate 3d组件类图")

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

使用 SphericalCoordinate3D 组件处理空间球坐标：

```js
let sc = new SphericalCoordinate3D(10, Math.PI / 3, Math.PI);

// 将坐标围绕 x 轴旋转 60°
sc.rotateX(Math.PI / 3);

// 输出球坐标
console.log(sc.r, sc.theta, sc.phi);

// 转换为直角坐标
let rc = sc.toRC();
```

*\*用于处理空间直角坐标的 RectangularCoordinate3D 组件 和 用于处理空间柱面坐标的 CylindricalCoordinate3D 组件 的使用方法相同*


## 许可证书

The MIT license.
