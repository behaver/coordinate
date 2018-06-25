'use strict';

/**
 * 不同坐标系统之间，点坐标的转换操作集合
 *
 * @private
 * @type {Object}
 */
const switchers = {
  // 直角坐标 转 柱面坐标
  RCToCC: (x, y, z) => {
    return {
      r: Math.sqrt(x * x + y * y),
      theta: Math.atan2(y, x),
      z,
    }
  },

  // 柱面坐标 转 直角坐标
  CCToRC: (r, theta, z) => {
    return {
      x: r * Math.cos(theta),
      y: r * Math.sin(theta),
      z: z,
    };
  },

  // 直角坐标 转 球坐标
  RCToSC: (x, y, z) => {
    let r = Math.sqrt(x * x + y * y + z * z);
    return {
      r,
      theta: r === 0 ? 0 : Math.acos(z / r),
      phi: Math.atan2(y, x),
    }
  },

  // 球坐标 转 直角坐标
  SCToRC: (r, theta, phi) => {
    return {
      x: r * Math.sin(theta) * Math.cos(phi),
      y: r * Math.sin(theta) * Math.sin(phi),
      z: r * Math.cos(theta),
    };
  },

  // 柱面坐标 转 球坐标
  CCToSC: (r, theta, z) => {
    return {
      r: Math.sqrt(r * r + z * z),
      theta: Math.atan2(r, z),
      phi: theta,
    };
  },

  // 球坐标 转 柱面坐标
  SCToCC: (r, theta, phi) => {
    return {
      r: r * Math.sin(theta),
      theta: phi,
      z: r * Math.cos(theta),
    };
  },
};

/**
 * SystemSwitcherPoint3D
 * 
 * SystemSwitcherPoint3D 对象用于空间坐标系间的点坐标转换
 * 其能等效转换的空间坐标系有：
 * 直角坐标系、极坐标系
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 1.0.0
 */
class SystemSwitcherPoint3D {

  /**
   * 构造函数
   * 
   * @param  {Number} a              初始 空间点坐标 第一坐标值
   * @param  {Number} b              初始 空间点坐标 第二坐标值
   * @param  {Number} c              初始 空间点坐标 第三坐标值
   * @param  {String} system         初始坐标系统
   *                                 包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   */
  constructor(a, b, c, system = 'rc') {
    this.cache = {
      rc: { x: 0, y: 0, z: 0 },
    };
    if(a !== undefined || b !== undefined || c !== undefined) this.from(a, b, c, system);
  }

  /**
   * 设定起始坐标
   * 
   * @param  {Number} a              初始 空间点坐标 第一坐标值
   * @param  {Number} b              初始 空间点坐标 第二坐标值
   * @param  {Number} c              初始 空间点坐标 第三坐标值
   * @param  {String} system         初始坐标系统
   *                                 包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   * @return {SystemSwitcherPoint3D} 返回 this 引用
   */
  from(a, b, c, system = 'rc') {
    switch(system) {
      case 'rc': // 直角坐标
        return this.fromRC(a, b, c);
        break;
      case 'sc': // 球坐标
        return this.fromSC(a, b, c);
        break;
      case 'cc': // 柱面坐标
        return this.fromCC(a, b, c);
        break;

      default:
        throw Error('Unknow param system.')
    }
  }

  /**
   * 转换至给定坐标系统
   * 
   * @param  {String} system         转出的坐标系统
   *                                 包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   * @return {Object}                返回 点坐标 对象
   */
  to(system = 'rc') {
    switch (system) {
      case 'rc':
        return this.toRC();
        break;
      case 'cc':
        return this.toCC();
        break;
      case 'sc':
        return this.toSC();
        break;

      default:
        throw Error('Illegality param system.');
    }
  }

  /**
   * 设定起始直角坐标 P(x, y, z)
   * 
   * @param  {Number} x              起始直角坐标 x 轴坐标
   * @param  {Number} y              起始直角坐标 y 轴坐标
   * @param  {Number} z              起始直角坐标 z 轴坐标
   * @return {SystemSwitcherPoint3D} 返回 this 引用
   */
  fromRC(x, y, z) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number' || typeof(z) !== 'number') throw Error('Illegality Parameters.');

    this.cache = {
      rc: { x, y, z },
    };

    return this;
  }

  /**
   * 转换坐标至直角坐标系
   * 
   * @return {Object}                返回 直角坐标 对象
   */
  toRC() {
    if (!this.cache.rc) {
      if (this.cache.cc) {
        let { r, theta, z } = this.cache.cc;
        this.cache.rc = switchers.CCToRC(r, theta, z);
      } else if (this.cache.sc) {
        let { r, theta, phi } = this.cache.sc;
        this.cache.rc = switchers.SCToRC(r, theta, phi);
      }
    }

    return this.cache.rc;
  }

  /**
   * 设定起始柱面坐标 P(r, θ, z)
   * 
   * @param  {Number} r              起始柱面坐标 r 值，r ≥ 0
   * @param  {Number} theta          起始柱面坐标 θ 值，0 ≤ θ ≤ 2π
   * @param  {Number} z              起始柱面坐标 z 值
   * @return {SystemSwitcherPoint3D} 返回 this 引用
   */
  fromCC(r, theta, z) {
    if (typeof(r) !== 'number' || typeof(theta) !== 'number' || typeof(z) !== 'number') throw Error('Illegality Parameters.');
    if (r < 0) throw Error('The param r has to be equal or greater than 0.');
    if (theta < 0 || theta > 2 * Math.PI) throw Error('The param theta has to be in [0, 2π]');

    this.cache = {
      cc: { r, theta, z },
    };

    return this;
  }

  /**
   * 转换至柱面坐标系
   * 
   * @return {Object}                返回 柱面坐标 对象
   */
  toCC() {
    if (!this.cache.cc) {
      if (this.cache.rc) {
        let { x, y, z } = this.cache.rc;
        this.cache.cc = switchers.RCToCC(x, y, z);
      } else if (this.cache.sc) {
        let { r, theta, phi } = this.cache.sc;
        this.cache.cc = switchers.SCToCC(r, theta, phi);
      }
    }

    return this.cache.cc;
  }

  /**
   * 设定起始球坐标 P(r, θ, φ)
   * 
   * @param  {Number} r              起始球坐标 r 值，r ≥ 0
   * @param  {Number} theta          起始球坐标 θ 值，0 ≤ θ ≤ π
   * @param  {Number} phi            起始球坐标 φ 值，0 ≤ φ ≤ 2π
   * @return {SystemSwitcherPoint3D} 返回 this 引用
   */
  fromSC(r, theta, phi) {
    if (typeof(r) !== 'number' || typeof(theta) !== 'number' || typeof(phi) !== 'number') throw Error('Illegality Parameters.');
    if (r < 0) throw Error('The param r has to be equal or greater than 0.');
    if (theta < 0 || theta > Math.PI) throw Error('The param theta has to be in [0, π]');
    if (phi < 0 || phi > 2 * Math.PI) throw Error('The param phi has to be in [0, 2π]');

    this.cache = {
      sc: { r, theta, phi },
    };

    return this;
  }

  /**
   * 转换至球坐标系
   * 
   * @return {Object}              xs  返回 球坐标 对象
   */
  toSC() {
    if (!this.cache.sc) {
      if (this.cache.cc) {
        let { r, theta, z } = this.cache.cc;
        this.cache.sc = switchers.CCToSC(r, theta, z);
      } else if (this.cache.rc) {
        let { x, y, z } = this.cache.rc;
        this.cache.sc = switchers.RCToSC(x, y, z);
      }
    }

    return this.cache.sc;
  }
}

module.exports = SystemSwitcherPoint3D;
