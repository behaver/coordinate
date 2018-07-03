'use strict';

const Coordinate3D = require('../src/3d/Coordinate3D');
const expect = require("chai").expect;

describe('#Coordinate3D', () => {
  describe('#rc', () => {
    it('The parameters have to be all numbers.', () => {
      expect(() => {
        let a = (new Coordinate3D).rc(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).rc(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).rc();
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).rc(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#cc', () => {
    it('The parameters have to be all numbers.', () => {
      expect(() => {
        let a = (new Coordinate3D).cc(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc();
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param rho has to be equal or greater than 0.', () => {
      expect(() => {
        let a = (new Coordinate3D).cc(-1, 2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc(0, 2, 0.23);
      }).not.to.throw();
    });

    it('The param phi has to be in [0, 2π].', () => {
      expect(() => {
        let a = (new Coordinate3D).cc(1, -2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc(1, 7, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc(1, 0, 0.23);
      }).not.to.throw();
      expect(() => {
        let a = (new Coordinate3D).cc(1, 2 * Math.PI, 0.23);
      }).not.to.throw();
    })
  });

  describe('#sc', () => {
    it('The parameters have to be all numbers.', () => {
      expect(() => {
        let a = (new Coordinate3D).sc(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc();
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param r has to be equal or greater than 0.', () => {
      expect(() => {
        let a = (new Coordinate3D).sc(-1, 2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(0, 2, 0.23);
      }).not.to.throw();
    });

    it('The param theta has to be in [0, π].', () => {
      expect(() => {
        let a = (new Coordinate3D).sc(1, -2, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, 4, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, 0, 0.23);
      }).not.to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, Math.PI, 0.23);
      }).not.to.throw();
    })

    it('The param phi has to be in [0, 2π].', () => {
      expect(() => {
        let a = (new Coordinate3D).sc(1, 2, -2);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, 2, 7);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, 0, 0);
      }).not.to.throw();
      expect(() => {
        let a = (new Coordinate3D).sc(1, Math.PI, 2 * Math.PI);
      }).not.to.throw();
    })
  });

  describe('#toRC', () => {
    it('Verify the result from toRC().equal().', () => {
      expect((new Coordinate3D(1, 1, 1)).toRC().equal()).to.deep.equal({ x: 1, y: 1, z: 1 });
    })
  });

  describe('#toCC', () => {
    it('Verify the result from toCC().equal().', () => {
      expect((new Coordinate3D(1, 1, 1)).toCC().equal()).to.deep.equal({ rho: 1.4142135623730951, phi: 0.7853981633974483, z: 1 });
    })
  });

  describe('#toSC', () => {
    it('Verify the result from toSC().equal().', () => {
      expect((new Coordinate3D(1, 1, 1)).toSC().equal()).to.deep.equal({ r: 1.7320508075688772, theta: 0.9553166181245092, phi: 0.7853981633974483 });
    })
  });
});