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

  describe('#toPC', () => {
    it('Verify the result from toPC().equal().', () => {
      expect((new RectangularCoordinate2D(1, 1)).toPC().equal()).to.deep.equal({ rho: 1.4142135623730951, theta: 0.7853981633974483 });
    })
  });
})
