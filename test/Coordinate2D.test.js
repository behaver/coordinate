'use strict';

const Coordinate2D = require('../src/2d/Coordinate2D');
const expect = require("chai").expect;

describe('#Coordinate2D', () => {
  describe('#rc', () => {
    it('The parameters have to be all numbers.', () => {
      expect(() => {
        let a = (new Coordinate2D).rc(1);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).rc(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).rc();
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).rc(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#pc', () => {
    it('The parameters have to be all numbers.', () => {
      expect(() => {
        let a = (new Coordinate2D).pc(1);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc();
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc(1, 0.23);
      }).not.to.throw();
    });

    it('The param rho has to be equal or greater than 0.', () => {
      expect(() => {
        let a = (new Coordinate2D).pc(-1, 0.23);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc(0, 0.23);
      }).not.to.throw();
    });

    it('The param theta has to be in [0, 2π].', () => {
      expect(() => {
        let a = (new Coordinate2D).pc(1, -2);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc(1, 7);
      }).to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc(1, 0);
      }).not.to.throw();
      expect(() => {
        let a = (new Coordinate2D).pc(1, 2 * Math.PI);
      }).not.to.throw();
    })
  });

  describe('#toRC', () => {
    it('Verify the result from toRC().equal().', () => {
      expect((new Coordinate2D(1, 1)).toRC().equal()).to.deep.equal({ x: 1, y: 1 });
    })
  });

  describe('#toPC', () => {
    it('Verify the result from toPC().equal().', () => {
      expect((new Coordinate2D(1, 1)).toPC().equal()).to.deep.equal({ rho: 1.4142135623730951, theta: 0.7853981633974483 });
    })
  });
})
