'use strict';

const { TransformerPoint2D } = require('../index');
const expect = require("chai").expect;

describe('#TransformerPoint2D', () => {
  describe('#constructor', () => {
    it('The parameters have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new TransformerPoint2D(1);
      }).to.throw();
      expect(() => {
        let a = new TransformerPoint2D(1, '23');
      }).to.throw();
      expect(() => {
        let a = new TransformerPoint2D;
      }).not.to.throw();
      expect(() => {
        let a = new TransformerPoint2D(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#from', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new TransformerPoint2D).from();
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D).from(1, '23');
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D).from(1);
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D).from(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#equal', () => {
    it('The coordinate has not been transformed should equal the object itself.', () => {
      expect((new TransformerPoint2D(1, 0.23)).equal()).to.deep.equal({ x: 1, y: 0.23 });
    })
  });

  describe('#translate', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).translate();
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).translate(1, '23');
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).translate(1, );
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).translate(1, 0.23);
      }).not.to.throw();
    });

    it('Vreify the result from translate()', () => {
      expect((new TransformerPoint2D(1, 0.23)).translate(-1, -0.23).equal()).to.deep.equal({ x: 0, y: 0 });
    })
  });

  describe('#scale', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).scale();
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).scale(1, '23');
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).scale(1);
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).scale(1, 0.23);
      }).not.to.throw();
    });
    it('Vreify the result from scale()', () => {
      expect((new TransformerPoint2D(1, 0.23)).scale(-1, 2).equal()).to.deep.equal({ x: -1, y: 0.46 });
    })
  });

  describe('#rotate', () => {
    it('The param angle has to be a number.', () => {
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate();
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate('21');
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate(Math.PI / 2);
      }).not.to.throw();
    });

    it('The param pivot has to be a object about a coordinate', () => {
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate(Math.PI / 2, { x: 1, y: 0.5 });
      }).not.to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate(Math.PI / 2, {});
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate(Math.PI / 2, { x: 1 });
      }).to.throw();
      expect(() => {
        (new TransformerPoint2D(1, 0.23)).rotate(Math.PI / 2, { x: 'z', y: 2 });
      }).to.throw();
    })
  });
});
