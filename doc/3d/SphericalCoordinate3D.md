# SphericalCoordinate3D

## 简介

SphericalCoordinate3D 是空间球极坐标组件。它将球极坐标封装成一个 SphericalCoordinate3D 对象，使用者可通过对象方法对坐标进行平移、缩放、旋转等变换处理，也可以将其转换至其他坐标系统。

## 用例

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

## API

`from(r, theta, phi)` 设定起始空间球坐标 (r, θ, φ)

`translate(dx, dy, dz)` 坐标平移

`scale(sx, sy, sz)` 坐标缩放

`rotateX(angle)` 坐标绕 X 轴旋转

`rotateY(angle)` 坐标绕 Y 轴旋转

`rotateZ(angle)` 坐标绕 Z 轴旋转

`rotateVector(angle, x, y, z)` 坐标绕 任意轴 旋转

`rotate(angle, { axis, axialVector } = { axis: 'z' })` 坐标旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

`equal()` 获取 结果坐标 对象

`toRC()` 转换为直角坐标

`toCC()` 转换为柱面坐标

`get r()` 获取球坐标 r 值

`set r(r)` 设置球坐标 r 值

`get theta()` 获取球坐标 theta 值

`set theta(theta)` 设置球坐标 theta 值

`get phi()` 获取球坐标 phi 值

`set phi(phi)` 设置球坐标 phi 值

## 许可证书

The MIT license.

[返回主页面](../../readme.md)