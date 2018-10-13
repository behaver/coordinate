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

  describe('#equal', () => {
    it('The return of method equal should be a Object.', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).equal()).to.be.a('Object');
    });
    it('The return of equal should be right.', () => {
      expect((new CylindricalCoordinate3D(1, 2, 3)).equal()).to.deep.equal({ rho: 1, phi: 2, z: 3 });
    });
  });

  describe('#toRC', () => {
    it('Verify the result from toRC().', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).toRC()).to.deep.equal({ x: 0.5403023058681398, y: 0.8414709848078965, z: 1 });
    })
  });

  describe('#toSC', () => {
    it('Verify the result from toSC().', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).toSC()).to.deep.equal({ r: 1.4142135623730951, theta: 0.7853981633974483, phi: 1 });
    })
  });

  describe('#get rho', () => {
    it('The return of get rho should be a number.', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).rho).to.be.a('Number');
    });
    it('The return of get rho should be same as the res of equal().', () => {
      let cc = (new CylindricalCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(cc.equal().rho).to.equal(cc.rho);
    });
  });

  describe('#get phi', () => {
    it('The return of get phi should be a number.', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).phi).to.be.a('Number');
    });
    it('The return of get phi should be same as the res of equal().', () => {
      let cc = (new CylindricalCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(cc.equal().phi).to.equal(cc.phi);
    });
  });

  describe('#get z', () => {
    it('The return of get z should be a number.', () => {
      expect((new CylindricalCoordinate3D(1, 1, 1)).z).to.be.a('Number');
    });
    it('The return of get z should be same as the res of equal().', () => {
      let cc = (new CylindricalCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(cc.equal().z).to.equal(cc.z);
    });
  });

  describe('set rho(rho)', () => {
    it('The method should be valid.', () => {
      let cc = new CylindricalCoordinate3D(1, 1, 1);
      cc.rho = 2;
      expect(cc.equal()).to.deep.equal({ rho: 2, phi: 1, z: 1 });
    });
  });

  describe('set phi(phi)', () => {
    it('The method should be valid.', () => {
      let cc = new CylindricalCoordinate3D(1, 1, 1);
      cc.phi = 2;
      expect(cc.equal()).to.deep.equal({ rho: 1, phi: 2, z: 1 });
    });
  });

  describe('set z(z)', () => {
    it('The method should be valid.', () => {
      let cc = new CylindricalCoordinate3D(1, 1, 1);
      cc.z = 2;
      expect(cc.equal()).to.deep.equal({ rho: 1, phi: 1, z: 2 });
    });
  });
})
