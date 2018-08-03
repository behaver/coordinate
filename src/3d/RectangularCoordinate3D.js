'use strict';

const BaseCoordinate3D = require('./BaseCoordinate3D');

/**
 * RectangularCoordinate3D
 * 
 * RectangularCoordinate3D 对象用于 空间直角坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.1.0
 */
class RectangularCoordinate3D extends BaseCoordinate3D {

  /**
   * 构造函数
   * 
   * @param  {Number} x                直角坐标 x 值
   * @param  {Number} y                直角坐标 y 值
   * @param  {Number} z                直角坐标 z 值
   */
  constructor(x, y, z) {
    super(x, y, z, 'rc');
  }

  /**
   * 设定起始空间直角坐标 (x, y, z)
   * 
   * @param  {Number} x                直角坐标 x 值
   * @param  {Number} y                直角坐标 y 值
   * @param  {Number} z                直角坐标 z 值
   * @return {RectangularCoordinate3D} 返回 this 引用
   */
  from(x, y, z) {
    super.from(x, y, z, 'rc');
    return this;
  }

  /**
   * 转换坐标至柱面坐标系
   * 
   * @return {Object} 返回 柱面坐标 对象
   */
  toCC() {
    return this.point.toCC();
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
   * 获取直角坐标 x 值
   * 
   * @return {Number} 直角坐标 x 值
   */
  get x() {
    if (!this.cache) {
      this.cache = this.point.toRC();
    }

    return this.cache.x;
  }

  /**
   * 获取直角坐标 y 值
   * 
   * @return {Number} 直角坐标 y 值
   */
  get y() {
    if (!this.cache) {
      this.cache = this.point.toRC();
    }

    return this.cache.y;
  }

  /**
   * 获取直角坐标 z 值
   * 
   * @return {Number} 直角坐标 z 值
   */
  get z() {
    if (!this.cache) {
      this.cache = this.point.toRC();
    }

    return this.cache.z;
  }

  /**
   * 获取结果坐标
   * 
   * @return {Object} 直角坐标值对象
   */
  equal() {
    if (!this.cache) {
      this.cache = this.point.toRC();
    }

    return { x: this.cache.x, y: this.cache.y, z: this.cache.z }
  }
}

module.exports = RectangularCoordinate3D;
