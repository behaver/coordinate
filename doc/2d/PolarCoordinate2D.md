# PolarCoordinate2D

## 简介

PolarCoordinate2D 是平面极坐标组件。它将极坐标封装成一个 PolarCoordinate2D 对象，使用者可通过对象方法对坐标进行平移、缩放、旋转等变换处理，也可以将其转换至其他坐标系统。

## 用例

使用 PolarCoordinate2D 组件处理平面极坐标：

```js
let pc = new PolarCoordinate2D(10, Math.PI / 3);

// 将坐标围绕原点旋转 60°
pc.rotate(Math.PI / 3);

// 输出极坐标
console.log(pc.rho, pc.theta);

// 转换为直角坐标
let rc = pc.toRC();
```

## API

`from(rho, theta)` 设定起始平面极坐标 (ρ, θ)

`translate(dx, dy)` 坐标平移

`scale(sx, sy)` 坐标缩放

`rotate(angle, pivot = { x: 0, y: 0 })` 坐标旋转

`inverse(axis = 'y')` 坐标反演，用于左右手性更换

`equal()` 获取 结果坐标 对象

`toRC()` 转换为直角坐标

`get rho()` 获取极坐标 rho 值

`get theta()` 获取极坐标 theta 值

## 许可证书

The MIT license.