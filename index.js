'use strict';

// 平面坐标
const SystemSwitcher2D = require('./src/2d/SystemSwitcher2D');
const Transformer2D = require('./src/2d/Transformer2D');
const BaseCoordinate2D = require('./src/2d/BaseCoordinate2D');
const PolarCoordinate2D = require('./src/2d/PolarCoordinate2D');
const RectangularCoordinate2D = require('./src/2d/RectangularCoordinate2D');

// 空间坐标
const SystemSwitcher3D = require('./src/3d/SystemSwitcher3D');
const Transformer3D = require('./src/3d/Transformer3D');
const BaseCoordinate3D = require('./src/3d/BaseCoordinate3D');
const RectangularCoordinate3D = require('./src/3d/RectangularCoordinate3D');
const CylindricalCoordinate3D = require('./src/3d/CylindricalCoordinate3D');
const SphericalCoordinate3D = require('./src/3d/SphericalCoordinate3D');

module.exports = { 
  // 平面坐标
  SystemSwitcher2D, 
  Transformer2D, 
  BaseCoordinate2D, 
  PolarCoordinate2D,
  RectangularCoordinate2D,

  // 空间坐标
  SystemSwitcher3D, 
  Transformer3D, 
  BaseCoordinate3D, 
  RectangularCoordinate3D,
  CylindricalCoordinate3D,
  SphericalCoordinate3D,
};
