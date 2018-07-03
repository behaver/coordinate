'use strict';

/**
 * Transformer3D
 * 
 * 对空间坐标系内的任意点进行平移，旋转，缩放等处理。
 *
 * @author 董 三碗 <qianxing@yeah.net>
 * @version 2.1.0
 */
class Transformer3D {

  /**
   * 构造函数
   * 
   * @param  {Number} x          空间点坐标 x 值
   * @param  {Number} y          空间点坐标 y 值
   * @param  {Number} z          空间点坐标 z 值
   */
  constructor(x, y, z) {
    if (x === undefined && y === undefined && z === undefined) this.point = { x: 0, y: 0, z: 0 };
    else this.from( x, y, z );
  }

  /**
   * 设定起始坐标
   * 
   * @param  {Number} x           空间点坐标 x 值
   * @param  {Number} y           空间点坐标 y 值
   * @param  {Number} z           空间点坐标 z 值
   * @return {Transformer3D}      返回 this 引用
   */
  from(x, y, z) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number' || typeof(z) !== 'number') throw Error('Illegality Parameters.');

    this.point = { x, y, z };

    return this;
  }

  /**
   * 获取最终变换结果坐标
   * 
   * @return {Object}             空间点坐标 对象
   */
  equal() {
    return this.point;
  }

  /**
   * 坐标平移
   * 
   * @param  {Number} dx          X 轴平移距离
   * @param  {Number} dy          Y 轴平移距离
   * @param  {Number} dz          Z 轴平移距离
   * @return {Transformer3D}      返回 this 引用
   */
  translate(dx, dy, dz) {
    if (typeof(dx) !== 'number' || typeof(dy) !== 'number' || typeof(dz) !== 'number') throw Error('Illegality Parameters.');

    // 进行变换前的点坐标
    let { x, y, z } = this.point;

    this.point = { x: x + dx, y: y + dy, z: z + dz };

    return this;
  }

  /**
   * 坐标缩放
   * 
   * @param  {Number} sx          X 轴缩放比例
   * @param  {Number} sy          Y 轴缩放比例
   * @param  {Number} sz          Z 轴缩放比例
   * @return {Transformer3D}      返回 this 引用
   */
  scale(sx, sy, sz) {
    if (typeof(sx) !== 'number' || typeof(sy) !== 'number' || typeof(sz) !== 'number') throw Error('Illegality Parameters.');

    // 进行变换前的点坐标
    let { x, y, z } = this.point;

    this.point = { x: x * sx, y: y * sy, z: z * sz };

    return this;
  }

  /**
   * 坐标绕 X 轴旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @return {Transformer3D}      返回 this 引用
   */
  rotateX(angle) {
    if (typeof(angle) !== 'number') throw Error('Illegality param angle.');

    let cosa = Math.cos(angle);
    let sina = Math.sin(angle);

    // 进行变换前的点坐标
    let { x, y, z } = this.point;

    this.point = { x, y: y * cosa - z * sina, z: y * sina + z * cosa };

    return this;
  }

  /**
   * 坐标绕 Y 轴旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @return {Transformer3D}      返回 this 引用
   */
  rotateY(angle) {
    if (typeof(angle) !== 'number') throw Error('Illegality param angle.');

    let cosa = Math.cos(angle);
    let sina = Math.sin(angle);

    // 进行变换前的点坐标
    let { x, y, z } = this.point;

    this.point = { x: z * sina + x * cosa, y, z: z * cosa - x * sina };

    return this;
  }

  /**
   * 坐标绕 Z 轴旋转
   *
   * 以右手系为标准
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @return {Transformer3D}      返回 this 引用
   */
  rotateZ(angle) {
    if (typeof(angle) !== 'number') throw Error('Illegality param angle.');

    let cosa = Math.cos(angle);
    let sina = Math.sin(angle);

    // 进行变换前的点坐标
    let { x, y, z } = this.point;

    this.point = { x: x * cosa - y * sina, y: x * sina + y * cosa, z };

    return this;
  }

  /**
   * 坐标绕 任意轴 旋转
   *
   * 本方法实际利用的是 四元数 的原理，故又称作：四元数旋转
   *
   * 四元数是一种高阶复数，四元数 q 表示为：
   *   q = (x, y, z, w) = xi + yj + zk + w  (ps: 算式中的 w 对应本函数参数 angle)
   * 其中，i，j，k满足：
   *   i * i = j * j = k * k = −1
   *   ij = k, jk = i, ki = j
   * 由于i，j，k的性质和笛卡尔坐标系三个轴叉乘的性质很像，所以可以将四元数写成一个向量和一个实数组合的形式：
   *   q = (v⃗ + w) = ((x, y, z), w)
   *
   * 可以推导出四元数的一些运算性质，包括：
   *   四元数乘法：q1q2 = (v1 × v2 + w1v2 + w2v1, w1w2 − v1⋅v2)
   *   共轭四元数：q∗ = (−v⃗, w)
   *   四元数的平方模：N(q) = N(v⃗) + w * w
   *   四元数的逆：q∗ / N(q)
   *   
   * 四元数可以看做是向量和实数的一种更加一般的形式，向量可以视作为实部为0的四元数，而实数可以是作为虚部为0的四元数。
   * 四元数可用来刻画三维空间中的旋转，绕单位向量(x, y, z)表示的轴旋转 θ ，可令：
   *   q = ((x, y, z) * sin(θ / 2), cos(θ / 2))
   *   
   * 刚体坐标系中的点 p(P,0)（写成四元数的形式）
   * 旋转后的坐标 p' 为：p′ = qpq−1
   *
   * 参考资料: http://www.cnblogs.com/yiyezhai/p/3176725.html
   * 
   * @param  {Number} angle       旋转角度，单位：弧度
   * @param  {Number} x           旋转轴向量 x 坐标
   * @param  {Number} y           旋转轴向量 y 坐标
   * @param  {Number} z           旋转轴向量 z 坐标
   * @return {Transformer3D}      返回 this 引用
   */
  rotateVector(angle, x, y, z) {
    if (typeof(angle) !== 'number' || typeof(x) !== 'number' || typeof(y) !== 'number' || typeof(z) !== 'number') throw Error('The parameters have to be numbers.');

    let v_length = Math.sqrt(x * x + y * y + z + z);
    if (v_length === 0) {
      this.point = {
        x: 0,
        y: 0,
        z: 0,
      };

      return this;
    }

    let angle_half = 0.5 * angle;
    let cos_ah = Math.cos(angle_half);
    let sin_ah = Math.sin(angle_half);

    // 坐标系中的点p(P,0)（写成四元数的形式）
    let p = {
      x: this.point.x,
      y: this.point.y,
      z: this.point.z,
      w: 0,
    }

    // q = ((x, y, z) * sin(θ / 2), cos(θ / 2))
    // 先将 (x, y, z) 转化为单位向量
    // 然后构造出四元数 q
    let q = { 
      x: x / v_length * sin_ah, 
      y: y / v_length * sin_ah,
      z: z / v_length * sin_ah,
      w: cos_ah,
    };

    // 求 qp 相乘
    // 四元数乘法：qp = (vq × vp + wqvp + wpvq, wqwp − vq⋅vp)
    // 参考资料: https://baike.baidu.com/item/四元数/5795379?fr=aladdin
    let qp = {
      x: q.w * p.x + q.y * p.z - q.z * p.y,
      y: q.w * p.y - q.x * p.z + q.z * p.x,
      z: q.w * p.z + q.x * p.y - q.y * p.x,
      w: -q.x * p.x - q.y * p.y - q.z * p.z,
    };

    // o 为 q 的逆 = q 的共轭，q∗ = (−v⃗, w)
    let o = {
      x: -q.x,
      y: -q.y,
      z: -q.z,
      w: q.w,
    };

    // 求 qpo 相乘
    // 即求 qpq−1
    this.point = {
      x: qp.w * o.x + qp.x * o.w + qp.y * o.z - qp.z * o.y,
      y: qp.w * o.y - qp.x * o.z + qp.y * o.w + qp.z * o.x,
      z: qp.w * o.z + qp.x * o.y - qp.y * o.x + qp.z * o.w,
      // w: qp.w * o.w - qp.x * o.x - qp.y * o.y - qp.z * o.z,
    };

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
   * @return {Transformer3D}              返回 this 引用
   */
  rotate(angle, { axis, axialVector } = { axis: 'z' }) {
    if (axialVector) {
      if (typeof(axialVector.x) !== 'number' || typeof(axialVector.y) !== 'number' || typeof(axialVector.z) !== 'number') throw Error('Illegality param options.axialVector.');
      return this.rotateVector(angle, axialVector.x, axialVector.y, axialVector.z);
    } else {
      switch(axis) {
        case 'x':
          return this.rotateX(angle);
          break;
        case 'y':
          return this.rotateY(angle);
          break;
        case 'z':
          return this.rotateZ(angle);
          break;

        default:
          throw Error('Illegality param options.axis.');
      }
    }
  }

  /**
   * 坐标反演，用于左右手性更换
   *
   * @param  {String} axis               反演轴
   *                                     可选参数：'x'、'y'、'z'，缺省值为：'y'
   * @return {Transformer3D}             返回 this 引用
   */
  inverse(axis = 'y') {
    switch (axis) {
      case 'x':
        this.point.x = -this.point.x;
        break;
      case 'y':
        this.point.y = -this.point.y;
        break;
      case 'z':
        this.point.z = -this.point.z;
        break;

      default:
        throw Error('Illegality param axis.');
    }
    return this;
  }
};

module.exports = Transformer3D;
