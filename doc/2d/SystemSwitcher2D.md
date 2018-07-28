# SystemSwitcher2D

## 简介

SystemSwitcher2D 是用于处理平面坐标系统转换的工具类，它可以使平面坐标在*直角坐标系*和*极坐标系*之间任意转换。

## 用例

```js
使用 SystemSwitcher2D 将平面坐标点进行坐标系统间的转换：

```js
let ssp2d = new SystemSwitcher2D(3, 4.5, 'rc');

// 将直角系(RC)坐标 (3, 4.5) 转换到 极坐标系(PC)
let pc = ssp2d.toPC();
```

SystemSwitcher2D 目前支持的坐标系统包括：

* 直角坐标系(RC)
* 极坐标系(PC)

## API

`from(a, b, system = 'rc')` 设定起始平面坐标

system 参数用于指定坐标的系统类型，可设定值有：'rc' 直角坐标系 和 'pc' 极坐标系

`to(system)`  转换平面坐标至给定坐标系统

system 参数用于指定坐标的系统类型，可设定值有：'rc' 直角坐标系 和 'pc' 极坐标系

`fromRC(x, y)` 设定起始平面直角坐标

`toRC()` 转换平面坐标至直角坐标系

`fromPC(rho, theta)` 设定起始平面极坐标

`toPC()` 转换平面坐标至极坐标系

## 许可证书

The MIT license.

[返回主页面](../../readme.md)