# Transformer2D

## 简介

Transformer2D 是用于处理平面直角坐标变换的工具组件。

## 功能

* 平移
* 缩放
* 旋转
* 手性翻转

## 用例

使用 Transformer2D 对平面直角系坐标点进行变换操作：

```js
let tp2d = new Transformer2D(3, 4.5);

let res = tp2d
  .rotate(Math.PI / 4) // 绕原点旋转 45°
  .scale(2, 0.5) // x 轴方向缩放 2 倍，y 轴方向缩放 0.5 倍
  .translate(1, 3) // 通过平移向量（1, 3）进行平移
  .equal();
```

## API

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

## 许可证书

The MIT license.