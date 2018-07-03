'use strict';

const BaseCoordinate2D = require('./BaseCoordinate2D');

/**
 * PolarCoordinate2D
 * 
 * PolarCoordinate2D 对象用于 平面极坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
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
   * @return {PolarCoordinate2D} 返回 this 引用
   */
  toRC() {
    this.system = 'rc';
    return this;
  }
}

module.exports = PolarCoordinate2D;
