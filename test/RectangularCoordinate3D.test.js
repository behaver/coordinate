'use strict';

const RectangularCoordinate3D = require('../src/3d/RectangularCoordinate3D');
const expect = require("chai").expect;

describe('#RectangularCoordinate3D', () => {
  describe('#constructor', () => {
    it('The parameters x, y, z have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new RectangularCoordinate3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new RectangularCoordinate3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new RectangularCoordinate3D;
      }).not.to.throw();
      expect(() => {
        let a = new RectangularCoordinate3D(1, 2, 0.23);
      }).not.to.throw();
    });
  })

  describe('#from', () => {
    it('The parameters x, y, z have to be all numbers.', () => {
      expect(() => {
        let a = (new RectangularCoordinate3D).from(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate3D).from();
      }).to.throw();
      expect(() => {
        let a = (new RectangularCoordinate3D).from(1, 2, 0.23);
      }).not.to.throw();
    });
  })

  describe('#equal', () => {
    it('The return of method equal should be a Object.', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).equal()).to.be.a('Object');
    });
    it('The return of equal should be right.', () => {
      expect((new RectangularCoordinate3D(1, 2, 3)).equal()).to.deep.equal({ x: 1, y: 2, z: 3 });
    });
    it('Vreify the result from translate()', () => {
      expect((new RectangularCoordinate3D(1, 2, 0.23)).translate(-1, -2, -0.23).equal()).to.deep.equal({ x: 0, y: 0, z: 0 });
    })
    it('Vreify the result from scale()', () => {
      expect((new RectangularCoordinate3D(1, 2, 0.23)).scale(-1, 2, 1).equal()).to.deep.equal({ x: -1, y: 4, z: 0.23 });
    })
    it('Vreify the result from rotateX()', () => {
      expect((new RectangularCoordinate3D(1, 2, 3)).rotateX(Math.PI / 2).equal()).to.deep.equal({ x: 1, y: -3, z: 2 });
    });
    it('Vreify the result from rotateY()', () => {
      expect((new RectangularCoordinate3D(1, 2, 3)).rotateY(Math.PI / 2).equal()).to.deep.equal({ x: 3, y: 2, z: -0.9999999999999998 });
    });
    it('Vreify the result from rotateZ()', () => {
      expect((new RectangularCoordinate3D(1, 2, 3)).rotateZ(Math.PI / 2).equal()).to.deep.equal({ x: -2, y: 1.0000000000000002, z: 3 });
    });
    it('Verify the result form rotateVector().', () => {
      expect((new RectangularCoordinate3D(1, 0, 1)).rotateVector(0.5 * Math.PI, 0, 4, 0).equal()).to.deep.equal({ x: 1, y: 0, z: -0.9999999999999997 });
      expect((new RectangularCoordinate3D(2, 0, 2)).rotateVector(0.5 * Math.PI, 0, 4, 0).equal()).to.deep.equal({ x: 2, y: 0, z: -1.9999999999999993 });
      expect((new RectangularCoordinate3D(1, 2, 3)).rotateVector(Math.PI / 2, 4, 0, 0).equal()).to.deep.equal({ x: 1, y: -3, z: 2.000000000000001 });
      expect((new RectangularCoordinate3D(1, 2, 3)).rotateVector(Math.PI / 2, 0, 3, 0).equal()).to.deep.equal({ x: 3, y: 2, z: -0.9999999999999993 });
      expect((new RectangularCoordinate3D(1, 2, 3)).rotateVector(Math.PI / 2, 0, 0, 2).equal()).to.deep.equal({ x: -2, y: 1.0000000000000004, z: 3 });
    });
    it('Vreify the result from inverse.', () => {
      expect((new RectangularCoordinate3D(1, 2, 0.23)).inverse('x').equal()).to.deep.equal({ 'x': -1, 'y': 2, 'z': 0.23 });
      expect((new RectangularCoordinate3D(1, 2, 0.23)).inverse('y').equal()).to.deep.equal({ 'x': 1, 'y': -2, 'z': 0.23 });
      expect((new RectangularCoordinate3D(1, 2, 0.23)).inverse('z').equal()).to.deep.equal({ 'x': 1, 'y': 2, 'z': -0.23 });
    })
  });

  describe('#toCC', () => {
    it('Verify the result from toCC().', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).toCC()).to.deep.equal({ rho: 1.4142135623730951, phi: 0.7853981633974483, z: 1 });
    })
  });

  describe('#toSC', () => {
    it('Verify the result from toSC().', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).toSC()).to.deep.equal({ r: 1.7320508075688772, theta: 0.9553166181245092, phi: 0.7853981633974483 });
    })
  });

  describe('#get x', () => {
    it('The return of get x should be a number.', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).x).to.be.a('Number');
    });
    it('The return of get x should be same as the res of equal().', () => {
      let rc = (new RectangularCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(rc.equal().x).to.equal(rc.x);
    });
  });

  describe('#get y', () => {
    it('The return of get y should be a number.', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).y).to.be.a('Number');
    });
    it('The return of get y should be same as the res of equal().', () => {
      let rc = (new RectangularCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(rc.equal().y).to.equal(rc.y);
    });
  });

  describe('#get z', () => {
    it('The return of get z should be a number.', () => {
      expect((new RectangularCoordinate3D(1, 1, 1)).z).to.be.a('Number');
    });
    it('The return of get z should be same as the res of equal().', () => {
      let rc = (new RectangularCoordinate3D(1, 1, 1)).rotateX(Math.PI / 3).scale(2, 0.5, -1);
      expect(rc.equal().z).to.equal(rc.z);
    });
  });

  describe('set x(x)', () => {
    it('The method should be valid.', () => {
      let rc = new RectangularCoordinate3D(1, 1, 1);
      rc.x = 2;
      expect(rc.equal()).to.deep.equal({ x: 2, y: 1, z: 1 });
    });
  });

  describe('set y(y)', () => {
    it('The method should be valid.', () => {
      let rc = new RectangularCoordinate3D(1, 1, 1);
      rc.y = 2;
      expect(rc.equal()).to.deep.equal({ x: 1, y: 2, z: 1 });
    });
  });

  describe('set z(z)', () => {
    it('The method should be valid.', () => {
      let rc = new RectangularCoordinate3D(1, 1, 1);
      rc.z = 2;
      expect(rc.equal()).to.deep.equal({ x: 1, y: 1, z: 2 });
    });
  });
})
