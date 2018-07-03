'use strict';

const SphericalCoordinate3D = require('../src/3d/SphericalCoordinate3D');
const expect = require("chai").expect;

describe('#SphericalCoordinate3D', () => {
  describe('#constructor', () => {
    it('The parameters r, theta, phi have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new SphericalCoordinate3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D;
      }).not.to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param r has to be equal or greater than 0.', () => {
      expect(() => {
        let a = new SphericalCoordinate3D(-1, 2, 0.23);
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(0, 2, 0.23);
      }).not.to.throw();
    });

    it('The param theta has to be in [0, π].', () => {
      expect(() => {
        let a = new SphericalCoordinate3D(1, -2, 0.23);
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, 4, 0.23);
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, 0, 0.23);
      }).not.to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, Math.PI, 0.23);
      }).not.to.throw();
    })

    it('The param phi has to be in [0, 2π].', () => {
      expect(() => {
        let a = new SphericalCoordinate3D(1, 2, -2);
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, 2, 7);
      }).to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, 0, 0);
      }).not.to.throw();
      expect(() => {
        let a = new SphericalCoordinate3D(1, Math.PI, 2 * Math.PI);
      }).not.to.throw();
    })
  })

  describe('#from', () => {
    it('The parameters r, theta, phi have to be all numbers.', () => {
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from();
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param r has to be equal or greater than 0.', () => {
      expect(() => {
        let a = (new SphericalCoordinate3D).from(-1, 2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(0, 2, 0.23);
      }).not.to.throw();
    });

    it('The param theta has to be in [0, π].', () => {
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, -2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 4, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 0, 0.23);
      }).not.to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, Math.PI, 0.23);
      }).not.to.throw();
    })

    it('The param phi has to be in [0, 2π].', () => {
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 2, -2);
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 2, 7);
      }).to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, 0, 0);
      }).not.to.throw();
      expect(() => {
        let a = (new SphericalCoordinate3D).from(1, Math.PI, 2 * Math.PI);
      }).not.to.throw();
    })
  })

  describe('#toRC', () => {
    it('Verify the result from toRC().equal().', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).toRC().equal()).to.deep.equal({ x: 0.4546487134128409, y: 0.7080734182735712, z: 0.5403023058681398 });
    })
  });

  describe('#toCC', () => {
    it('Verify the result from toCC().equal().', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).toCC().equal()).to.deep.equal({ rho: 0.8414709848078965, phi: 1, z: 0.5403023058681398 });
    })
  });
})
