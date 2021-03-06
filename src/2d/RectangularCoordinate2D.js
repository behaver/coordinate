'use strict';

const BaseCoordinate2D = require('./BaseCoordinate2D');

/**
 * RectangularCoordinate2D
 * 
 * RectangularCoordinate2D 对象用于 平面直角坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.1.0
 */
class RectangularCoordinate2D extends BaseCoordinate2D {

  /**
   * 构造函数
   * 
   * @param  {Number} x                平面直角坐标 x 值
   * @param  {Number} y                平面直角坐标 y 值
   */
  constructor(x, y) {
    super(x, y, 'rc');
  }

  /**
   * 设定起始平面直角坐标 (x, y)
   * 
   * @param  {Number} x                平面直角坐标 x 值
   * @param  {Number} y                平面直角坐标 y 值
   * @return {RectangularCoordinate2D} 返回 this 引用
   */
  from(x, y) {
    super.from(x, y, 'rc');
    return this;
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
   * 设置直角坐标 x 值
   * 
   * @param  {Number} x 直角坐标 x 值
   */
  set x(x) {
    this.from(x, this.cache.y);
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
   * 设置直角坐标 y 值
   * 
   * @param  {Number} y 直角坐标 y 值
   */
  set y(y) {
    this.from(this.cache.x, y);
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

    return { x: this.cache.x, y: this.cache.y }
  }
}

module.exports = RectangularCoordinate2D;
