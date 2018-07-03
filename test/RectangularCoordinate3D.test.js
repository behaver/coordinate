'use strict';

const RectangularCoordinate3D = require('../src/3d/RectangularCoordinate3D');
const expect = require("chai").expect;

describe('#RectangularCoordinate3D', () => {
  describe('#constructor', () => {
    it('The parameters x, y, z have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new RectangularCoordinate3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new RectangularCoordinate3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new RectangularCoordinate3D;
      }).not.to.throw();
      expect(() => {
        let a = new RectangularCoordinate3D(1, 2, 0.23);
      }).not.to.throw();
    });
  })

  describe('#from', () => {
    it('The parameters x, y, z have to be all numbers.', () => {
      expect(() => {
        let a = (new RectangularCoordinate3D).from(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate3D).from();
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate3D).from(1, 2, 0.23);
      }).not.to.throw();
    });

  })

  describe('#toCC', () => {
    it('Verify the result from toCC().equal().', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).toCC().equal()).to.deep.equal({ rho: 1.4142135623730951, phi: 0.7853981633974483, z: 1 });
    })
  });

  describe('#toSC', () => {
    it('Verify the result from toSC().equal().', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).toSC().equal()).to.deep.equal({ r: 1.7320508075688772, theta: 0.9553166181245092, phi: 0.7853981633974483 });
    })
  });
})
