'use strict';

const SystemSwitcher2D = require('./SystemSwitcher2D');
const Transformer2D = require('./Transformer2D');

/**
 * BaseCoordinate2D
 *
 * BaseCoordinate2D 为 平面坐标 变换操作的基类
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.1.0
 */
class BaseCoordinate2D {

  /**
   * 构造函数
   *
   * 详见方法 from(a, b, system = 'rc') 注释说明
   * 
   * @param  {Number} a         初始 平面点坐标 第一坐标值
   * @param  {Number} b         初始 平面点坐标 第二坐标值
   * @param  {String} system    初始 坐标系统
   *                            包括：rc: 直角坐标; pc: 极坐标;
   */
  constructor(a, b, system = 'rc') {
    this.point = new SystemSwitcher2D(a, b, system);
    this.transformer = new Transformer2D();
    this.cache = this.point.to(system);
  }

  /**
   * 设定起始坐标 (a, b)
   *
   * 对应直角坐标 (x, y)
   * 对应极坐标 (ρ, θ)
   * 
   * @param  {Number} a         初始 平面点坐标 第一坐标值
   * @param  {Number} b         初始 平面点坐标 第二坐标值
   * @param  {String} system    初始 坐标系统
   *                            包括：rc: 直角坐标; pc: 极坐标;
   * @return {BaseCoordinate2D} 返回 this 引用
   */
  from(a, b, system = 'rc') {
    this.point.from(a, b, system);
    this.cache = this.point.to(system);

    return this;
  }

  /**
   * 坐标平移
   * 
   * @param  {Number} dx        X 轴平移距离
   * @param  {Number} dy        Y 轴平移距离
   * @return {BaseCoordinate2D} 返回 this 引用
   */
  translate(dx, dy) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y)
      .translate(dx, dy)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标缩放
   * 
   * @param  {Number} sx        X 轴缩放比例
   * @param  {Number} sy        Y 轴缩放比例
   * @return {BaseCoordinate2D} 返回 this 引用
   */
  scale(sx, sy) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y)
      .scale(sx, sy)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle     旋转角度，单位：弧度
   * @param  {Number} pivot.x   旋转绕点 x 轴坐标值
   * @param  {Number} pivot.y   旋转绕点 y 轴坐标值
   * @return {BaseCoordinate2D} 返回 this 引用
   */
  rotate(angle, pivot = { x: 0, y: 0 }) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y)
      .rotate(angle, pivot)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标反演，用于左右手性更换
   *
   * @param  {String} axis      反演轴
   *                            可选参数：'x'、'y'，缺省值为：'y'
   * @return {BaseCoordinate2D} 返回 this 引用
   */
  inverse(axis = 'y') {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y)
      .inverse(axis)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y);

    // 清除缓存
    this.cache = null;

    return this;
  }
}

module.exports = BaseCoordinate2D;
