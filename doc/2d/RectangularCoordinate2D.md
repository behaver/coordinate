# RectangularCoordinate2D

## 简介

RectangularCoordinate2D 是平面直角坐标组件。它将直角坐标封装成一个 RectangularCoordinate2D 对象，使用者可通过对象方法对坐标进行平移、缩放、旋转等变换处理，也可以将其转换至其他坐标系统。

## 用例

使用 RectangularCoordinate2D 组件处理平面直角坐标：

```js
let rc = new RectangularCoordinate2D(10, 8);

// 将坐标围绕原点旋转 60°
rc.rotate(Math.PI / 3);

// 输出直角坐标
console.log(rc.x, rc.y);

// 转换为极坐标
let pc = rc.toPC();
```

## API

`from(x, y)` 设定起始平面直角坐标 (x, y)

`translate(dx, dy)` 坐标平移

`scale(sx, sy)` 坐标缩放

`rotate(angle, pivot = { x: 0, y: 0 })` 坐标旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

`equal()` 获取 结果坐标 对象

`toPC()` 转换为极坐标

`get x()` 获取直角坐标 x 值

`set x(x)` 设置直角坐标 x 值

`get y()` 获取直角坐标 y 值

`set y(y)` 设置直角坐标 y 值

## 许可证书

The MIT license.

[返回主页面](../../readme.md)