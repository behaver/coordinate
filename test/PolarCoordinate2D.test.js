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

  describe('#toRC', () => {
    it('Verify the result from toRC().equal().', () => {
      expect((new PolarCoordinate2D(1, 1)).toRC().equal()).to.deep.equal({ x: 0.5403023058681398, y: 0.8414709848078965 });
    })
  });
})
