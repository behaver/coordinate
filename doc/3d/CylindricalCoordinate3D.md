# CylindricalCoordinate3D

## 简介

CylindricalCoordinate3D 是空间柱面坐标组件。它将柱面坐标封装成一个 CylindricalCoordinate3D 对象，使用者可通过对象方法对坐标进行平移、缩放、旋转等变换处理，也可以将其转换至其他坐标系统。

## 用例

使用 CylindricalCoordinate3D 组件处理空间柱面坐标：

```js
let cc = new CylindricalCoordinate3D(3, Math.PI / 3, 4);

// 将坐标围绕 y 轴旋转 60°
cc.rotateY(Math.PI / 3);

// 输出柱面坐标
console.log(cc.rho, cc.phi, cc.z);

// 转换为球极坐标
let sc = cc.toSC();
```

## API

`from(rho, phi, z)` 设定起始空间柱面坐标 (ρ, φ, z)

`translate(dx, dy, dz)` 坐标平移

`scale(sx, sy, sz)` 坐标缩放

`rotateX(angle)` 坐标绕 X 轴旋转

`rotateY(angle)` 坐标绕 Y 轴旋转

`rotateZ(angle)` 坐标绕 Z 轴旋转

`rotateVector(angle, x, y, z)` 坐标绕 任意轴 旋转

`rotate(angle, { axis, axialVector } = { axis: 'z' })` 坐标旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

`equal()` 获取 结果坐标 对象

`toSC()` 转换为球极坐标

`toCC()` 转换为柱面坐标

`get rho()` 获取柱面坐标 rho 值

`get phi()` 获取柱面坐标 phi 值

`get z()` 获取柱面坐标 z 值

## 许可证书

The MIT license.