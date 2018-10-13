'use strict';

const BaseCoordinate3D = require('./BaseCoordinate3D');

/**
 * CylindricalCoordinate3D
 * 
 * CylindricalCoordinate3D 对象用于 空间柱面坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.1.0
 */
class CylindricalCoordinate3D extends BaseCoordinate3D {

  /**
   * 构造函数 
   * 
   * 详见方法 from(rho, phi, z) 注释说明
   * 
   * @param  {Number} rho              柱面坐标 ρ 值，ρ ≥ 0
   * @param  {Number} phi              柱面坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @param  {Number} z                柱面坐标 z 值
   */
  constructor(rho, phi, z) {
    super(rho, phi, z, 'cc');
  }

  /**
   * 设定起始空间柱面坐标 (ρ, φ, z)
   *
   * ρ 是 P 点与 z-轴的垂直距离。
   * φ 是线 OP 在 xy-面的投影线与正 x-轴之间的夹角。
   * z 与直角坐标的 z 等值。
   * 
   * @param  {Number} rho              柱面坐标 ρ 值，ρ ≥ 0
   * @param  {Number} phi              柱面坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @param  {Number} z                柱面坐标 z 值
   * @return {CylindricalCoordinate3D} 返回 this 引用
   */
  from(rho, phi, z) {
    super.from(rho, phi, z, 'cc');
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
   * 转换坐标至球极坐标系
   * 
   * @return {Object} 返回 球坐标 对象
   */
  toSC() {
    return this.point.toSC();
  }

  /**
   * 获取柱面坐标 rho 值
   * 
   * @return {Number} 柱面坐标 rho 值
   */
  get rho() {
    if (!this.cache) {
      this.cache = this.point.toCC();
    }

    return this.cache.rho;
  }

  /**
   * 设置柱面坐标 rho 值
   * 
   * @param {Number} rho 柱面坐标 rho 值
   */
  set rho(rho) {
    this.from(rho, this.cache.phi, this.cache.z);
  }

  /**
   * 获取柱面坐标 phi 值
   * 
   * @return {Number} 柱面坐标 phi 值
   */
  get phi() {
    if (!this.cache) {
      this.cache = this.point.toCC();
    }

    return this.cache.phi;
  }

  /**
   * 设置柱面坐标 phi 值
   * 
   * @param {Number} phi 柱面坐标 phi 值
   */
  set phi(phi) {
    this.from(this.cache.rho, phi, this.cache.z);
  }

  /**
   * 获取柱面坐标 z 值
   * 
   * @return {Number} 柱面坐标 z 值
   */
  get z() {
    if (!this.cache) {
      this.cache = this.point.toCC();
    }

    return this.cache.z;
  }

  /**
   * 设置柱面坐标 z 值
   * 
   * @param {Number} z 柱面坐标 z 值
   */
  set z(z) {
    this.from(this.cache.rho, this.cache.phi, z);
  }

  /**
   * 获取结果坐标
   * 
   * @return {Object} 柱面坐标值对象
   */
  equal() {
    if (!this.cache) {
      this.cache = this.point.toCC();
    }

    return { rho: this.cache.rho, phi: this.cache.phi, z: this.cache.z }
  }
}

module.exports = CylindricalCoordinate3D;
