'use strict';

/**
 * 坐标在不同系统之间的转换操作集合
 *
 * 角度单位：弧度
 * 
 * @private
 * @type {Object}
 */
const switchers = {
  // 直角坐标 转 柱面坐标
  RCToCC: (x, y, z) => {
    let phi = Math.atan2(y, x);
    return {
      rho: Math.sqrt(x * x + y * y),
      phi: phi < 0 ? phi + Math.PI * 2 : phi,
      z,
    }
  },

  // 柱面坐标 转 直角坐标
  CCToRC: (rho, phi, z) => {
    return {
      x: rho * Math.cos(phi),
      y: rho * Math.sin(phi),
      z: z,
    };
  },

  // 直角坐标 转 球坐标
  RCToSC: (x, y, z) => {
    let r = Math.sqrt(x * x + y * y + z * z);
    let phi = Math.atan2(y, x);
    return {
      r,
      theta: r === 0 ? 0 : Math.acos(z / r),
      phi: phi < 0 ? phi + Math.PI * 2 : phi,
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
  CCToSC: (rho, phi, z) => {
    let theta = Math.atan2(rho, z);
    return {
      r: Math.sqrt(rho * rho + z * z),
      theta: theta < 0 ? theta + Math.PI * 2 : theta,
      phi,
    };
  },

  // 球坐标 转 柱面坐标
  SCToCC: (r, theta, phi) => {
    return {
      rho: r * Math.sin(theta),
      phi,
      z: r * Math.cos(theta),
    };
  },
};

/**
 * SystemSwitcher3D
 * 
 * SystemSwitcher3D 对象用于空间坐标系间的点坐标转换
 * 其能等效转换的空间坐标系有：
 * 直角坐标系、极坐标系
 * 类中涉及角度值的单位为：弧度
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 2.1.0
 */
class SystemSwitcher3D {

  /**
   * 构造函数
   *
   * 详见方法 from(a, b, c, system = 'rc') 注释说明
   * 
   * @param  {Number} a         初始 空间点坐标 第一坐标值
   * @param  {Number} b         初始 空间点坐标 第二坐标值
   * @param  {Number} c         初始 空间点坐标 第三坐标值
   * @param  {String} system    初始坐标系统
   *                            包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
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
   * 对应直角坐标 (x, y, z)
   * 对应柱面坐标 (ρ, φ, z)
   * 对应球极坐标 (r, θ, φ)
   * 
   * @param  {Number} a         初始 空间点坐标 第一坐标值
   * @param  {Number} b         初始 空间点坐标 第二坐标值
   * @param  {Number} c         初始 空间点坐标 第三坐标值
   * @param  {String} system    初始坐标系统
   *                            包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   * @return {SystemSwitcher3D} 返回 this 引用
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
   * @param  {String} system    转出的坐标系统
   *                            包括：rc: 直角坐标; sc: 球坐标; cc: 柱面坐标
   * @return {Object}           返回 点坐标 对象
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
   * 设定起始直角坐标 (x, y, z)
   * 
   * @param  {Number} x         起始直角坐标 x 轴坐标
   * @param  {Number} y         起始直角坐标 y 轴坐标
   * @param  {Number} z         起始直角坐标 z 轴坐标
   * @return {SystemSwitcher3D} 返回 this 引用
   */
  fromRC(x, y, z) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number' || typeof(z) !== 'number') throw Error('Illegality Parameters.');

    this.cache = {
      rc: { x, y, z },
    };

    return this;
  }

  /**
   * 转换坐标至直角坐标系 (x, y, z)
   * 
   * @return {Object}           返回 直角坐标 对象
   */
  toRC() {
    if (!this.cache.rc) {
      if (this.cache.cc) {
        let { rho, phi, z } = this.cache.cc;
        this.cache.rc = switchers.CCToRC(rho, phi, z);
      } else if (this.cache.sc) {
        let { r, theta, phi } = this.cache.sc;
        this.cache.rc = switchers.SCToRC(r, theta, phi);
      }
    }

    return this.cache.rc;
  }

  /**
   * 设定起始柱面坐标 (ρ, φ, z)
   * 
   * @param  {Number} rho       起始柱面坐标 ρ 值，ρ ≥ 0
   * @param  {Number} phi       起始柱面坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @param  {Number} z         起始柱面坐标 z 值
   * @return {SystemSwitcher3D} 返回 this 引用
   */
  fromCC(rho, phi, z) {
    if (typeof(rho) !== 'number' || typeof(phi) !== 'number' || typeof(z) !== 'number') throw Error('Illegality Parameters.');
    if (rho < 0) throw Error('The param rho has to be equal or greater than 0.');
    if (phi < 0 || phi > 2 * Math.PI) throw Error('The param phi has to be in [0, 2π]');

    this.cache = {
      cc: { rho, phi, z },
    };

    return this;
  }

  /**
   * 转换至柱面坐标系 (ρ, φ, z)
   * 
   * @return {Object}           返回 柱面坐标 (ρ, φ, z) 对象
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
   * 设定起始球坐标 (r, θ, φ)
   * 
   * @param  {Number} r         起始球坐标 r 值，r ≥ 0
   * @param  {Number} theta     起始球坐标 θ 值，单位：弧度，定义域：[0, π]
   * @param  {Number} phi       起始球坐标 φ 值，单位：弧度，定义域：[0, 2π]
   * @return {SystemSwitcher3D} 返回 this 引用
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
   * 转换至球坐标系 (r, θ, φ)
   * 
   * @return {Object}           返回 球坐标 (r, θ, φ) 对象
   */
  toSC() {
    if (!this.cache.sc) {
      if (this.cache.cc) {
        let { rho, phi, z } = this.cache.cc;
        this.cache.sc = switchers.CCToSC(rho, phi, z);
      } else if (this.cache.rc) {
        let { x, y, z } = this.cache.rc;
        this.cache.sc = switchers.RCToSC(x, y, z);
      }
    }

    return this.cache.sc;
  }
}

module.exports = SystemSwitcher3D;
