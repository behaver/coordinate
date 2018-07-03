'use strict';

const CylindricalCoordinate3D = require('../src/3d/CylindricalCoordinate3D');
const expect = require("chai").expect;

describe('#CylindricalCoordinate3D', () => {
  describe('#constructor', () => {
    it('The parameters rho, phi, z have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new CylindricalCoordinate3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D;
      }).not.to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param rho has to be equal or greater than 0.', () => {
      expect(() => {
        let a = new CylindricalCoordinate3D(-1, 2, 0.23);
      }).to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D(0, 2, 0.23);
      }).not.to.throw();
    });

    it('The param phi has to be in [0, 2π].', () => {
      expect(() => {
        let a = new CylindricalCoordinate3D(1, -2, 2);
      }).to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D(1, 7, 2);
      }).to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D(1, 0, 0);
      }).not.to.throw();
      expect(() => {
        let a = new CylindricalCoordinate3D(1, 2 * Math.PI, -1);
      }).not.to.throw();
    })
  })

  describe('#from', () => {
    it('The parameters rho, phi, z have to be all numbers.', () => {
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from();
      }).to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param rho has to be equal or greater than 0.', () => {
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(-1, 2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(0, 2, 0.23);
      }).not.to.throw();
    });

    it('The param phi has to be in [0, 2π].', () => {
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, -2, 2);
      }).to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, 7, 2);
      }).to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, 0, 0);
      }).not.to.throw();
      expect(() => {
        let a = (new CylindricalCoordinate3D).from(1, 2 * Math.PI, -1);
      }).not.to.throw();
    })
  })

  describe('#toRC', () => {
    it('Verify the result from toRC().equal().', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).toRC().equal()).to.deep.equal({ x: 0.5403023058681398, y: 0.8414709848078965, z: 1 });
    })
  });

  describe('#toSC', () => {
    it('Verify the result from toSC().equal().', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).toSC().equal()).to.deep.equal({ r: 1.4142135623730951, theta: 0.7853981633974483, phi: 1 });
    })
  });
})
