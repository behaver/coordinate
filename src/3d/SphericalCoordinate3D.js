'use strict';

const BaseCoordinate3D = require('./BaseCoordinate3D');

/**
 * SphericalCoordinate3D
 * 
 * SphericalCoordinate3D 对象用于 空间球坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class SphericalCoordinate3D extends BaseCoordinate3D {

  /**
   * 构造函数
   *
   * 详见方法 from(r, theta, phi) 注释说明
   * 
   * @param  {Number} r              球坐标 r 值，r ≥ 0
   * @param  {Number} theta          球坐标 θ 值，单位：弧度，定义域：[0, π]
   * @param  {Number} phi            球坐标 φ 值，单位：弧度，定义域：[0, 2π]
   */
  constructor(r, theta, phi) {
    super(r, theta, phi, 'sc');
  }

  /**
   * 设定起始空间球坐标 (r, θ, φ)
   *
   * r 是径向距离
   * θ 是天顶角
   * φ 是方位角
   * 
   * @param  {Number} r              球坐标 r 值，r ≥ 0
   * @param  {Number} theta          球坐标 θ 值，单位：弧度，定义域：[0, π]
   * @param  {Number} phi            球坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @return {SphericalCoordinate3D} 返回 this 引用
   */
  from(r, theta, phi) {
    super.from(r, theta, phi, 'sc');
    return this;
  }

  /**
   * 转换坐标至直角坐标系
   * 
   * @return {SphericalCoordinate3D} 返回 this 引用
   */
  toRC() {
    this.system = 'rc';
    return this;
  }

  /**
   * 转换坐标至柱面坐标系
   * 
   * @return {SphericalCoordinate3D} 返回 this 引用
   */
  toCC() {
    this.system = 'cc';
    return this;
  }
}

module.exports = SphericalCoordinate3D;
