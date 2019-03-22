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

    // it('The param theta has to be in [0, π].', () => {
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, -2, 0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, 4, 0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, 0, 0.23);
    //   }).not.to.throw();
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, Math.PI, 0.23);
    //   }).not.to.throw();
    // })

    // it('The param phi has to be in [0, 2π].', () => {
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, 2, -2);
    //   }).to.throw();
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, 2, 7);
    //   }).to.throw();
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, 0, 0);
    //   }).not.to.throw();
    //   expect(() => {
    //     let a = new SphericalCoordinate3D(1, Math.PI, 2 * Math.PI);
    //   }).not.to.throw();
    // })
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

    // it('The param theta has to be in [0, π].', () => {
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, -2, 0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, 4, 0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, 0, 0.23);
    //   }).not.to.throw();
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, Math.PI, 0.23);
    //   }).not.to.throw();
    // })

    // it('The param phi has to be in [0, 2π].', () => {
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, 2, -2);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, 2, 7);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, 0, 0);
    //   }).not.to.throw();
    //   expect(() => {
    //     let a = (new SphericalCoordinate3D).from(1, Math.PI, 2 * Math.PI);
    //   }).not.to.throw();
    // })
  })

  describe('#equal', () => {
    it('The return of method equal should be a Object.', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).equal()).to.be.a('Object');
    });
    it('The return of equal should be right.', () => {
      expect((new SphericalCoordinate3D(1, 2, 3)).equal()).to.deep.equal({ r: 1, theta: 2, phi: 3 });
    });
  });

  describe('#toRC', () => {
    it('Verify the result from toRC().', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).toRC()).to.deep.equal({ x: 0.4546487134128409, y: 0.7080734182735712, z: 0.5403023058681398 });
    })
  });

  describe('#toCC', () => {
    it('Verify the result from toCC().', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).toCC()).to.deep.equal({ rho: 0.8414709848078965, phi: 1, z: 0.5403023058681398 });
    })
  });

  describe('#get r', () => {
    it('The return of get r should be a number.', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).r).to.be.a('Number');
    });
    it('The return of get r should be same as the res of equal().', () => {
      let sc = (new SphericalCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(sc.equal().r).to.equal(sc.r);
    });
  });

  describe('#get theta', () => {
    it('The return of get theta should be a number.', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).theta).to.be.a('Number');
    });
    it('The return of get theta should be same as the res of equal().', () => {
      let sc = (new SphericalCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(sc.equal().theta).to.equal(sc.theta);
    });
  });

  describe('#get phi', () => {
    it('The return of get phi should be a number.', () => {
      expect((new SphericalCoordinate3D(1, 1, 1)).phi).to.be.a('Number');
    });
    it('The return of get phi should be same as the res of equal().', () => {
      let sc = (new SphericalCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(sc.equal().phi).to.equal(sc.phi);
    });
  });

  describe('set r(r)', () => {
    it('The method should be valid.', () => {
      let sc = new SphericalCoordinate3D(1, 1, 1);
      sc.r = 2;
      expect(sc.equal()).to.deep.equal({ r: 2, theta: 1, phi: 1 });
    });
  });

  describe('set theta(theta)', () => {
    it('The method should be valid.', () => {
      let sc = new SphericalCoordinate3D(1, 1, 1);
      sc.theta = 2;
      expect(sc.equal()).to.deep.equal({ r: 1, theta: 2, phi: 1 });
    });
  });

  describe('set phi(phi)', () => {
    it('The method should be valid.', () => {
      let sc = new SphericalCoordinate3D(1, 1, 1);
      sc.phi = 2;
      expect(sc.equal()).to.deep.equal({ r: 1, theta: 1, phi: 2 });
    });
  });
})
