'use strict';

const BaseCoordinate2D = require('./BaseCoordinate2D');

/**
 * Coordinate2D
 * 
 * Coordinate2D 对象用于 平面坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class Coordinate2D extends BaseCoordinate2D {

  /**
   * 设定起始直角坐标 (x, y)
   * 
   * @param  {Number} x     直角坐标 x 值
   * @param  {Number} y     直角坐标 y 值
   * @return {Coordinate2D} 返回 this 引用
   */
  rc(x, y) {
    this.system = 'rc';
    this.point.fromRC(x, y);
    return this;
  }

  /**
   * 设定起始极坐标 (ρ, θ)
   * 
   * @param  {Number} rho   极坐标 ρ 值，ρ ≥ 0
   * @param  {Number} theta 极坐标 θ 值，0 ≤ θ ≤ 2π
   * @return {Coordinate2D} 返回 this 引用
   */
  pc(rho, theta) {
    this.system = 'pc';
    this.point.fromPC(rho, theta);
    return this;
  }

  /**
   * 转换坐标至直角坐标系
   * 
   * @return {Coordinate2D} 返回 this 引用
   */
  toRC() {
    this.system = 'rc';
    return this;
  }

  /**
   * 转换坐标至极坐标系
   * 
   * @return {Coordinate2D} 返回 this 引用
   */
  toPC() {
    this.system = 'pc';
    return this;
  }
}

module.exports = Coordinate2D;
