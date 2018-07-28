# SystemSwitcher3D

## 简介

SystemSwitcher3D 是用于处理空间坐标系统转换的工具类，它可以使空间坐标在*直角坐标系*、*柱面坐标系*和*球坐标系*之间任意转换。

## 用例

```js
使用 SystemSwitcher3D 将3维空间坐标点进行坐标系统间的转换：

```js
let ssp3d = new SystemSwitcher3D(3, 0, 4.5, 'rc');

// 将直角系(RC)坐标 (3, 0, 4.5) 转换到 球坐标系(SC)
let SC = ssp3d.toSC();

// 转换到 柱面坐标系(CC)
let { rho, phi, z } = ssp3d.toCC();

// 柱面坐标系(CC)坐标 转换到 直角坐标系(RC)
let RC = ssp3d.fromCC(rho, phi, z).toRC();
```

SystemSwitcher3D 目前支持的坐标系统包括：

* 直角坐标系(RC)
* 柱面坐标系(CC)
* 球坐标系(SC)

## API

`from(a, b, c, system = 'rc')` 设定起始空间坐标

system 参数用于指定坐标的系统类型，可设定值有：

* 'rc' 直角坐标系
* 'cc' 柱面坐标系
* 'sc' 球坐标系

`to(system)` 转换至给定坐标系统

`fromRC(x, y, z)` 设定起始空间直角坐标

`toRC()` 转换至直角坐标系

`fromCC(r, theta, z)` 设定起始空间柱面坐标

`toCC()` 转换至柱面坐标系

`fromSC(r, theta, phi)` 设定起始空间球坐标

`toSC()` 转换至球坐标系

## 许可证书

The MIT license.