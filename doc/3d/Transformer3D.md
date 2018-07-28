# Transformer3D

## 简介

Transformer3D 是用于处理空间直角坐标变换的工具组件。

## 功能

* 平移
* 缩放
* 旋转
* 手性翻转

## 用例

使用 Transformer3D 对3维空间直角系坐标点进行变换操作：

```js
let tp3d = new Transformer3D(3, 0, 4.5);

let res = tp3d
  .rotateZ(Math.PI / 4) // 绕 Z 轴旋转 45°
  .scale(2, 0, 0.5) // x 轴方向缩放 2 倍，z 轴方向缩放 1 / 2 倍
  .translate(1, 2, 3) // 通过平移向量（1, 2, 3）进行平移
  .equal();
```

## API

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

## 许可证书

The MIT license.