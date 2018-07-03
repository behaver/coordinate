'use strict';

const BaseCoordinate3D = require('./BaseCoordinate3D');

/**
 * Coordinate3D
 * 
 * Coordinate3D 对象用于 空间坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class Coordinate3D extends BaseCoordinate3D {
  
  /**
   * 设定起始直角坐标 (x, y, z)
   * 
   * @param  {Number} x     直角坐标 x 值
   * @param  {Number} y     直角坐标 y 值
   * @param  {Number} z     直角坐标 z 值
   * @return {Coordinate3D} 返回 this 引用
   */
  rc(x, y, z) {
    this.system = 'rc';
    this.point.fromRC(x, y, z);
    return this;
  }

  /**
   * 设定起始柱面坐标 (ρ, φ, z)
   *
   * ρ 是 P 点与 z-轴的垂直距离。
   * φ 是线 OP 在 xy-面的投影线与正 x-轴之间的夹角。
   * z 与直角坐标的 z 等值。
   * 
   * @param  {Number} rho   柱面坐标 ρ 值，ρ ≥ 0
   * @param  {Number} phi   柱面坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @param  {Number} z     柱面坐标 z 值
   * @return {Coordinate3D} 返回 this 引用
   */
  cc(rho, phi, z) {
    this.system = 'cc';
    this.point.fromCC(rho, phi, z);
    return this;
  }

  /**
   * 设定起始球坐标 (r, θ, φ)
   *
   * r 是径向距离
   * θ 是天顶角
   * φ 是方位角
   * 
   * @param  {Number} r     球坐标 r 值，r ≥ 0
   * @param  {Number} theta 球坐标 θ 值，单位：弧度，定义域：[0, π]
   * @param  {Number} phi   球坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @return {Coordinate3D} 返回 this 引用
   */
  sc(r, theta, phi) {
    this.system = 'sc';
    this.point.fromSC(r, theta, phi);
    return this;
  }

  /**
   * 转换坐标至直角坐标系
   * 
   * @return {Coordinate3D} 返回 this 引用
   */
  toRC() {
    this.system = 'rc';
    return this;
  }

  /**
   * 转换坐标至柱面坐标系
   * 
   * @return {Coordinate3D} 返回 this 引用
   */
  toCC() {
    this.system = 'cc';
    return this;
  }

  /**
   * 转换坐标至球极坐标系
   * 
   * @return {Coordinate3D} 返回 this 引用
   */
  toSC() {
    this.system = 'sc';
    return this;
  }
}

module.exports = Coordinate3D;
