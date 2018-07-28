'use strict';

const SystemSwitcher3D = require('./SystemSwitcher3D');
const Transformer3D = require('./Transformer3D');

/**
 * BaseCoordinate3D
 *
 * BaseCoordinate3D 为 空间坐标 变换操作的基类
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.1.0
 */
class BaseCoordinate3D {

  /**
   * 构造函数
   *
   * 详见方法 from(a, b, c, system = 'rc') 注释说明
   * 
   * @param  {Number} a        初始 空间点坐标 第一坐标值
   * @param  {Number} b        初始 空间点坐标 第二坐标值
   * @param  {Number} c        初始 空间点坐标 第三坐标值
   * @param  {String} system   初始 坐标系统
   *                           包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   */
  constructor(a, b, c, system = 'rc') {
    this.point = new SystemSwitcher3D(a, b, c, system);
    this.transformer = new Transformer3D();
    this.cache = this.point.to(system);
  }

  /**
   * 设定起始坐标 (a, b, c)
   *
   * 对应直角坐标 (x, y, z)
   * 对应柱面坐标 (ρ, φ, z)
   * 对应球极坐标 (r, θ, φ)
   * 
   * @param  {Number} a         初始 空间点坐标 第一坐标值
   * @param  {Number} b         初始 空间点坐标 第二坐标值
   * @param  {Number} c         初始 空间点坐标 第三坐标值
   * @param  {String} system    初始 坐标系统
   *                            包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   * @return {BaseCoordinate3D} 返回 this 引用
   */
  from(a, b, c, system = 'rc') {
    this.point.from(a, b, c, system);
    this.cache = this.point.to(system);

    return this;
  }

  /**
   * 坐标平移
   * 
   * @param  {Number} dx         X 轴平移距离
   * @param  {Number} dy         Y 轴平移距离
   * @param  {Number} dz         Z 轴平移距离
   * @return {BaseCoordinate3D}  返回 this 引用
   */
  translate(dx, dy, dz) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .translate(dx, dy, dz)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标缩放
   * 
   * @param  {Number} sx          X 轴缩放比例
   * @param  {Number} sy          Y 轴缩放比例
   * @param  {Number} sz          Z 轴缩放比例
   * @return {BaseCoordinate3D}   返回 this 引用
   */
  scale(sx, sy, sz) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .scale(sx, sy, sz)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标绕 X 轴旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @return {BaseCoordinate3D}   返回 this 引用
   */
  rotateX(angle) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .rotateX(angle)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标绕 Y 轴旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @return {BaseCoordinate3D}   返回 this 引用
   */
  rotateY(angle) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .rotateY(angle)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标绕 Z 轴旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @return {BaseCoordinate3D}   返回 this 引用
   */
  rotateZ(angle) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .rotateZ(angle)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标绕 任意轴 旋转
   *
   * 本方法实际利用的是 四元数 的原理，故又称作：四元数旋转
   * 详见 Transformer3D 类中 rotateVector(angle, x, y, z) 方法的注释说明
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @param  {Number} x           旋转轴向量 x 坐标
   * @param  {Number} y           旋转轴向量 y 坐标
   * @param  {Number} z           旋转轴向量 z 坐标
   * @return {BaseCoordinate3D}   返回 this 引用
   */
  rotateVector(angle, x, y, z) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .rotateVector(angle, x, y, z)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle               旋转角度，单位：弧度
   * @param  {String} options.axis        设定围绕坐标轴
   *                                      可设定：'x'、'y'、'z'
   * @param  {Object} options.axialVector 设定绕轴向量
   *                                      例如：{ x: 12, y: 4, z: 3 }
   * @return {BaseCoordinate3D}           返回 this 引用
   */
  rotate(angle, { axis, axialVector } = { axis: 'z' }) {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .rotate(angle, { axis, axialVector })
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }

  /**
   * 坐标反演，用于左右手性更换
   *
   * @param  {String} axis               反演轴
   *                                     可选参数：'x'、'y'、'z'，缺省值为：'y'
   * @return {BaseCoordinate3D}          返回 this 引用
   */
  inverse(axis = 'y') {
    let rc = this.point.toRC();
    let rc_trans = this.transformer
      .from(rc.x, rc.y, rc.z)
      .inverse(axis)
      .equal();
    this.point.fromRC(rc_trans.x, rc_trans.y, rc_trans.z);

    // 清除缓存
    this.cache = null;

    return this;
  }
}

module.exports = BaseCoordinate3D;
