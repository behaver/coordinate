'use strict';

const BaseCoordinate2D = require('./BaseCoordinate2D');

/**
 * RectangularCoordinate2D
 * 
 * RectangularCoordinate2D 对象用于 平面直角坐标 的变换操作
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
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
   * 转换坐标至极坐标系
   * 
   * @return {RectangularCoordinate2D} 返回 this 引用
   */
  toPC() {
    this.system = 'pc';
    return this;
  }
}

module.exports = RectangularCoordinate2D;
