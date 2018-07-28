'use strict';

const BaseCoordinate2D = require('./BaseCoordinate2D');
const RectangularCoordinate2D = require('./RectangularCoordinate2D');

/**
 * PolarCoordinate2D
 * 
 * PolarCoordinate2D 对象用于 平面极坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.1.0
 */
class PolarCoordinate2D extends BaseCoordinate2D {

  /**
   * 构造函数
   * 
   * @param  {Number} rho        极坐标 ρ 值，ρ ≥ 0
   * @param  {Number} theta      极坐标 θ 值，0 ≤ θ ≤ 2π
   */
  constructor(rho, theta) {
    super(rho, theta, 'pc');
  }

  /**
   * 设定起始平面极坐标 (ρ, θ)
   * 
   * @param  {Number} rho        极坐标 ρ 值，ρ ≥ 0
   * @param  {Number} theta      极坐标 θ 值，0 ≤ θ ≤ 2π
   * @return {PolarCoordinate2D} 返回 this 引用
   */
  from(rho, theta) {
    super.from(rho, theta, 'pc');
    return this;
  }

  /**
   * 转换坐标至直角坐标系
   * 
   * @return {Object} 返回 直角坐标 对象
   */
  toRC() {
    return this.point.toRC();
  }

  /**
   * 获取极坐标 rho 值
   * 
   * @return {Number} 极坐标 rho 值
   */
  get rho() {
    if (!this.cache) {
      this.cache = this.point.toPC();
    }

    return this.cache.rho;
  }

  /**
   * 获取极坐标 theta 值
   * 
   * @return {Number} 极坐标 theta 值
   */
  get theta() {
    if (!this.cache) {
      this.cache = this.point.toPC();
    }

    return this.cache.theta;
  }

  /**
   * 获取结果坐标
   * 
   * @return {Object} 直角坐标值对象
   */
  equal() {
    if (!this.cache) {
      this.cache = this.point.toPC();
    }

    return { rho: this.cache.rho, theta: this.cache.theta }
  }
}

module.exports = PolarCoordinate2D;
