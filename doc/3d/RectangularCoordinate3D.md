# RectangularCoordinate3D

## 简介

RectangularCoordinate3D 是空间直角坐标组件。它将直角坐标封装成一个 RectangularCoordinate3D 对象，使用者可通过对象方法对坐标进行平移、缩放、旋转等变换处理，也可以将其转换至其他坐标系统。

## 用例

使用 RectangularCoordinate3D 组件处理空间直角坐标：

```js
let rc = new RectangularCoordinate3D(10, 4, 8);

// 将坐标围绕 y 轴旋转 60°
rc.rotateY(Math.PI / 3);

// 输出直角坐标
console.log(rc.x, rc.y, rc.z);

// 转换为柱面坐标
let cc = rc.toCC();
```

## API

`from(x, y, z)` 设定起始空间直角坐标 (x, y, z)

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

`get x()` 获取直角坐标 x 值

`get y()` 获取直角坐标 y 值

`get z()` 获取直角坐标 z 值

## 许可证书

The MIT license.