'use strict';

/**
 * 坐标在不同系统之间的转换操作集合
 *
 * @private
 * @type {Object}
 */
const switchers = {
  // 直角坐标 转 极坐标
  RCToPC: (x, y) => {
    return {
      rho: Math.sqrt(x * x + y * y),
      theta: Math.atan2(y, x),
    };
  },

  // 极坐标 转 直角坐标
  PCToRC: (rho, theta) => {
    return {
      x: rho * Math.cos(theta),
      y: rho * Math.sin(theta),
    };
  }
};

/**
 * SystemSwitcher2D
 * 
 * SystemSwitcher2D 对象用于平面点的坐标系统转换
 * 支持的平面坐标系统：
 * 直角坐标系 和 极坐标系
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 2.1.0
 */
class SystemSwitcher2D {

  /**
   * 构造函数
   * 
   * @param  {Number} a         初始 平面点坐标 第一坐标值
   * @param  {Number} b         初始 平面点坐标 第二坐标值
   * @param  {String} system    初始 坐标系统
   *                            包括：rc: 直角坐标; pc: 极坐标;
   */
  constructor(a, b, system = 'rc') {
    this.cache = {
      rc: { x: 0, y: 0 },
    };
    if (a !== undefined || b !== undefined) this.from(a, b, system);
  }

  /**
   * 设定起始坐标
   * 
   * @param  {Number} a         初始 平面点坐标 第一坐标值
   * @param  {Number} b         初始 平面点坐标 第二坐标值
   * @param  {String} system    初始 坐标系统
   *                            包括：'rc': 直角坐标; 'pc': 极坐标;
   * @return {SystemSwitcher2D} 返回 this 引用
   */
  from(a, b, system = 'rc') {
    switch(system) {
      case 'rc': // 直角坐标
        return this.fromRC(a, b);
        break;
      case 'pc': // 极坐标
        return this.fromPC(a, b);
        break;

      default:
        throw Error('Unknow param system.')
    }
  }

  /**
   * 转换至给定坐标系统
   * 
   * @param  {String} system    转出的坐标系统
   *                            'rc': 直角坐标; 'pc': 极坐标;
   * @return {Object}           返回 坐标 对象
   */
  to(system = 'rc') {
    switch (system) {
      case 'rc':
        return this.toRC();
        break;
      case 'pc':
        return this.toPC();
        break;

      default:
        throw Error('Illegality param system.');
    }
  }

  /**
   * 设定起始直角坐标 P(x, y)
   * 
   * @param  {Number} x         起始坐标 x 轴坐标
   * @param  {Number} y         起始坐标 y 轴坐标
   * @return {SystemSwitcher2D} 返回 this 引用
   */
  fromRC(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') throw Error('Illegality Parameters.');

    this.cache = {
      rc: { x, y },
    };

    return this;
  }

  /**
   * 转换坐标至直角坐标系
   * 
   * @return {Object}           返回 直角坐标 对象
   */
  toRC() {
    if (!this.cache.rc) {
      if (this.cache.pc) {
        let { rho, theta } = this.cache.pc;
        this.cache.rc = switchers.PCToRC(rho, theta);
      }
    }

    return this.cache.rc;
  }

  /**
   * 设定起始极坐标 P(ρ, θ)
   * 
   * @param  {Number} rho       极坐标 ρ 值，ρ ≥ 0
   * @param  {Number} theta     极坐标 θ 值，0 ≤ θ ≤ 2π
   * @return {SystemSwitcher2D} 返回 this 引用
   */
  fromPC(rho, theta) {
    if (typeof(rho) !== 'number' || typeof(theta) !== 'number') throw Error('Illegality Parameters.');
    if (rho < 0) throw Error('The param rho has to be equal or greater than 0.');
    if (theta < 0 || theta > 2 * Math.PI) throw Error('The param theta has to be in [0, 2π]');

    this.cache = {
      pc: { rho, theta },
    };

    return this;
  }

  /**
   * 转换至极坐标系
   * 
   * @return {Object}           返回 极坐标 对象
   */
  toPC() {
    if (!this.cache.pc) {
      if (this.cache.rc) {
        let { x, y } = this.cache.rc;
        this.cache.pc = switchers.RCToPC(x, y);
      }
    }

    return this.cache.pc;
  }
};

module.exports = SystemSwitcher2D;
