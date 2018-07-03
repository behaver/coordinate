'use strict';

/**
 * Transformer2D
 * 
 * 对平面坐标系内的任意点进行平移，旋转，缩放等处理。
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 2.1.0
 */
class Transformer2D {

  /**
   * 构造函数
   * 
   * @param  {Number} x      平面点坐标的 x 值
   * @param  {Number} y      平面点坐标的 y 值
   */
  constructor(x, y) {
    if (x === undefined && y === undefined ) this.point = { x: 0, y: 0 };
    else this.from( x, y );
  }

  /**
   * 设定起始坐标
   * 
   * @param  {Number} x      平面点坐标的 x 值
   * @param  {Number} y      平面点坐标的 y 值
   * @return {Transformer2D} 返回 this 引用
   */
  from(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') throw Error('Illegality Parameters.');

    this.point = { x, y };

    return this;
  }

  /**
   * 获取最终变换结果坐标
   * 
   * @return {Object}        平面点坐标对象
   */
  equal() {
    return this.point;
  }

  /**
   * 坐标平移
   * 
   * @param  {Number} dx     X 轴平移距离
   * @param  {Number} dy     Y 轴平移距离
   * @return {Transformer2D} 返回 this 引用
   */
  translate(dx, dy) {
    if (typeof(dx) !== 'number' || typeof(dy) !== 'number') throw Error('Illegality Parameters.');

    // 进行变换前的点坐标
    let { x, y } = this.point;

    this.point = { x: x + dx, y: y + dy };

    return this;
  }

  /**
   * 坐标缩放
   * 
   * @param  {Number} sx     X 轴缩放比例
   * @param  {Number} sy     Y 轴缩放比例
   * @return {Transformer2D} 返回 this 引用
   */
  scale(sx, sy) {
    if (typeof(sx) !== 'number' || typeof(sy) !== 'number') throw Error('Illegality Parameters.');

    // 进行变换前的点坐标
    let { x, y } = this.point;

    this.point = { x: x * sx, y: y * sy };

    return this;
  }

  /**
   * 坐标旋转
   * 
   * @param  {Number} angle   旋转角度，单位：弧度
   * @param  {Number} pivot.x 旋转绕点 x 轴坐标值
   * @param  {Number} pivot.y 旋转绕点 y 轴坐标值
   * @return {Transformer2D}  返回 this 引用
   */
  rotate(angle, pivot = { x: 0, y: 0 }) {
    if (typeof(angle) !== 'number' || typeof(pivot.x) !== 'number' || typeof(pivot.y) !== 'number') throw Error('The parameters have to be numbers.');

    let cosa = Math.cos(angle);
    let sina = Math.sin(angle);

    // 进行变换前的点坐标
    let { x, y } = this.point;

    this.point = { 
      x: (x - pivot.x) * cosa - (y - pivot.y) * sina + pivot.x, 
      y: (x - pivot.x) * sina + (y - pivot.y) * cosa + pivot.y, 
    };

    return this;
  }

  /**
   * 坐标反演，用于左右手性更换
   *
   * @param  {String} axis          反演轴
   *                                可选参数：'x'、'y'，缺省值为：'y'
   * @return {Transformer2D}        返回 this 引用
   */
  inverse(axis = 'y') {
    switch (axis) {
      case 'x':
        this.point.x = -this.point.x;
        break;
      case 'y':
        this.point.y = -this.point.y;
        break;

      default:
        throw Error('Illegality param axis.');
    }
    return this;
  }
}

module.exports = Transformer2D;
