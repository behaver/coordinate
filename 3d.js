'use strict';

// 空间坐标组件库

const SystemSwitcher3D = require('./src/3d/SystemSwitcher3D');
const Transformer3D = require('./src/3d/Transformer3D');
const BaseCoordinate3D = require('./src/3d/BaseCoordinate3D');
const RectangularCoordinate3D = require('./src/3d/RectangularCoordinate3D');
const CylindricalCoordinate3D = require('./src/3d/CylindricalCoordinate3D');
const SphericalCoordinate3D = require('./src/3d/SphericalCoordinate3D');

module.exports = { 
  SystemSwitcher3D, 
  Transformer3D, 
  BaseCoordinate3D, 
  RectangularCoordinate3D,
  CylindricalCoordinate3D,
  SphericalCoordinate3D,
};
