'use strict';

const PolarCoordinate2D = require('../src/2d/PolarCoordinate2D');
const expect = require("chai").expect;

describe('#PolarCoordinate2D', () => {
  describe('#constructor', () => {
    it('The parameters rho, theta have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new PolarCoordinate2D(1);
      }).to.throw();
      expect(() => {
        let a = new PolarCoordinate2D(1, '23');
      }).to.throw();
      expect(() => {
        let a = new PolarCoordinate2D;
      }).not.to.throw();
      expect(() => {
        let a = new PolarCoordinate2D(1, 0.23);
      }).not.to.throw();
    });

    it('The param rho has to be equal or greater than 0.', () => {
      expect(() => {
        let a = new PolarCoordinate2D(-1, 2);
      }).to.throw();
      expect(() => {
        let a = new PolarCoordinate2D(0, 2);
      }).not.to.throw();
    });

    it('The param theta has to be in [0, 2π].', () => {
      expect(() => {
        let a = new PolarCoordinate2D(1, -2);
      }).to.throw();
      expect(() => {
        let a = new PolarCoordinate2D(1, 7);
      }).to.throw();
      expect(() => {
        let a = new PolarCoordinate2D(1, 0);
      }).not.to.throw();
      expect(() => {
        let a = new PolarCoordinate2D(1, 2 * Math.PI);
      }).not.to.throw();
    })
  })

  describe('#from', () => {
    it('The parameters rho, theta have to be all numbers.', () => {
      expect(() => {
        let a = (new PolarCoordinate2D).from(1);
      }).to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from();
      }).to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from(1, 0.23);
      }).not.to.throw();
    });

    it('The param rho has to be equal or greater than 0.', () => {
      expect(() => {
        let a = (new PolarCoordinate2D).from(-1, 2);
      }).to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from(0, 2);
      }).not.to.throw();
    });

    it('The param theta has to be in [0, 2π].', () => {
      expect(() => {
        let a = (new PolarCoordinate2D).from(1, -2);
      }).to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from(1, 7);
      }).to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from(1, 0);
      }).not.to.throw();
      expect(() => {
        let a = (new PolarCoordinate2D).from(1, 2 * Math.PI);
      }).not.to.throw();
    })
  })

  describe('#equal', () => {
    it('The return of method equal should be a Object.', () => {
      expect((new PolarCoordinate2D(1, 1)).equal()).to.be.a('Object');
    });
    it('The return of equal should be right.', () => {
      expect((new PolarCoordinate2D(1, 2)).equal()).to.deep.equal({ rho: 1, theta: 2 });
    });
  });

  describe('#toRC', () => {
    it('Verify the result from toRC().', () => {
      expect((new PolarCoordinate2D(1, 1)).toRC()).to.deep.equal({ x: 0.5403023058681398, y: 0.8414709848078965 });
    })
  });

  describe('#get rho', () => {
    it('The return of get rho should be a number.', () => {
      expect((new PolarCoordinate2D(1, 1)).rho).to.be.a('Number');
    });
    it('The return of get rho should be same as the res of equal().', () => {
      let pc = (new PolarCoordinate2D(1, 1)).rotate(Math.PI / 3).scale(2, -1);
      expect(pc.equal().rho).to.equal(pc.rho);
    });
  });

  describe('#get theta', () => {
    it('The return of get theta should be a number.', () => {
      expect((new PolarCoordinate2D(1, 1)).theta).to.be.a('Number');
    });
    it('The return of get theta should be same as the res of equal().', () => {
      let pc = (new PolarCoordinate2D(1, 1)).rotate(Math.PI / 3).scale(2, -1);
      expect(pc.equal().theta).to.equal(pc.theta);
    });
  });

  describe('set rho(rho)', () => {
    it('The method should be valid.', () => {
      let pc = new PolarCoordinate2D(1, 1);
      pc.rho = 2;
      expect(pc.equal()).to.deep.equal({ rho: 2, theta: 1 });
    });
  });

  describe('set theta(theta)', () => {
    it('The method should be valid.', () => {
      let pc = new PolarCoordinate2D(1, 1);
      pc.theta = 2;
      expect(pc.equal()).to.deep.equal({ rho: 1, theta: 2 });
    });
  });
})
