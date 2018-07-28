'use strict';

const RectangularCoordinate2D = require('../src/2d/RectangularCoordinate2D');
const expect = require("chai").expect;

describe('#RectangularCoordinate2D', () => {
  describe('#constructor', () => {
    it('The parameters x, y have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new RectangularCoordinate2D(1);
      }).to.throw();
      expect(() => {
        let a = new RectangularCoordinate2D(1, '23');
      }).to.throw();
      expect(() => {
        let a = new RectangularCoordinate2D;
      }).not.to.throw();
      expect(() => {
        let a = new RectangularCoordinate2D(1, 0.23);
      }).not.to.throw();
    });
  })

  describe('#from', () => {
    it('The parameters x, y have to be all numbers.', () => {
      expect(() => {
        let a = (new RectangularCoordinate2D).from(1);
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate2D).from(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate2D).from();
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate2D).from(1, 0.23);
      }).not.to.throw();
    });
  })

  describe('#equal', () => {
    it('The return of method equal should be a Object.', () => {
      expect((new RectangularCoordinate2D(1, 1)).equal()).to.be.a('Object');
    });
    it('The return of equal should be right.', () => {
      expect((new RectangularCoordinate2D(1, 2)).equal()).to.deep.equal({ x: 1, y: 2 });
    });
    it('Vreify the result from translate()', () => {
      expect((new RectangularCoordinate2D(1, 0.23)).translate(-1, -0.23).equal()).to.deep.equal({ x: 0, y: 0 });
    })
    it('Vreify the result from scale()', () => {
      expect((new RectangularCoordinate2D(1, 0.23)).scale(-1, 2).equal()).to.deep.equal({ x: -1, y: 0.46 });
    })
    it('Vreify the result from inverse.', () => {
      expect((new RectangularCoordinate2D(1, 0.23)).inverse('x').equal()).to.deep.equal({ 'x': -1, 'y': 0.23 });
      expect((new RectangularCoordinate2D(1, 0.23)).inverse('y').equal()).to.deep.equal({ 'x': 1, 'y': -0.23 });
    })
  });

  describe('#toPC', () => {
    it('Verify the result from toPC().', () => {
      expect((new RectangularCoordinate2D(1, 1)).toPC()).to.deep.equal({ rho: 1.4142135623730951, theta: 0.7853981633974483 });
    })
  });

  describe('#get x', () => {
    it('The return of get x should be a number.', () => {
      expect((new RectangularCoordinate2D(1, 1)).x).to.be.a('Number');
    });
    it('The return of get x should be same as the res of equal().', () => {
      let rc = (new RectangularCoordinate2D(1, 1)).rotate(Math.PI / 3).scale(2, -1);
      expect(rc.equal().x).to.equal(rc.x);
    });
  });

  describe('#get y', () => {
    it('The return of get y should be a number.', () => {
      expect((new RectangularCoordinate2D(1, 1)).y).to.be.a('Number');
    });
    it('The return of get y should be same as the res of equal().', () => {
      let rc = (new RectangularCoordinate2D(1, 1)).rotate(Math.PI / 3).scale(2, -1);
      expect(rc.equal().y).to.equal(rc.y);
    });
  });
})
