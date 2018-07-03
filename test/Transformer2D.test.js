'use strict';

const Transformer2D = require('../src/2d/Transformer2D');
const expect = require("chai").expect;

describe('#Transformer2D', () => {
  describe('#constructor', () => {
    it('The parameters have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new Transformer2D(1);
      }).to.throw();
      expect(() => {
        let a = new Transformer2D(1, '23');
      }).to.throw();
      expect(() => {
        let a = new Transformer2D;
      }).not.to.throw();
      expect(() => {
        let a = new Transformer2D(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#from', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new Transformer2D).from();
      }).to.throw();
      expect(() => {
        (new Transformer2D).from(1, '23');
      }).to.throw();
      expect(() => {
        (new Transformer2D).from(1);
      }).to.throw();
      expect(() => {
        (new Transformer2D).from(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#equal', () => {
    it('The coordinate has not been transformed should equal the object itself.', () => {
      expect((new Transformer2D(1, 0.23)).equal()).to.deep.equal({ x: 1, y: 0.23 });
    })
  });

  describe('#translate', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new Transformer2D(1, 0.23)).translate();
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).translate(1, '23');
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).translate(1, );
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).translate(1, 0.23);
      }).not.to.throw();
    });

    it('Vreify the result from translate()', () => {
      expect((new Transformer2D(1, 0.23)).translate(-1, -0.23).equal()).to.deep.equal({ x: 0, y: 0 });
    })
  });

  describe('#scale', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new Transformer2D(1, 0.23)).scale();
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).scale(1, '23');
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).scale(1);
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).scale(1, 0.23);
      }).not.to.throw();
    });
    it('Vreify the result from scale()', () => {
      expect((new Transformer2D(1, 0.23)).scale(-1, 2).equal()).to.deep.equal({ x: -1, y: 0.46 });
    })
  });

  describe('#rotate', () => {
    it('The param angle has to be a number.', () => {
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate();
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate('21');
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate(Math.PI / 2);
      }).not.to.throw();
    });

    it('The param pivot has to be a object about a coordinate', () => {
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate(Math.PI / 2, { x: 1, y: 0.5 });
      }).not.to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate(Math.PI / 2, {});
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate(Math.PI / 2, { x: 1 });
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).rotate(Math.PI / 2, { x: 'z', y: 2 });
      }).to.throw();
    })
  });

  describe('#inverse', () => {
    it('The param axis has to be in [\'x\', \'y\'].', () => {
      expect(() => {
        (new Transformer2D(1, 0.23)).inverse(12);
        (new Transformer2D(1, 0.23)).inverse('z');
        (new Transformer2D(1, 0.23)).inverse(null);
        (new Transformer2D(1, 0.23)).inverse([]);
        (new Transformer2D(1, 0.23)).inverse({});
      }).to.throw();
      expect(() => {
        (new Transformer2D(1, 0.23)).inverse();
        (new Transformer2D(1, 0.23)).inverse('x');
        (new Transformer2D(1, 0.23)).inverse('y');
      }).not.to.throw();
    })

    it('Vreify the result from inverse.', () => {
      expect((new Transformer2D(1, 0.23)).inverse('x').equal()).to.deep.equal({ 'x': -1, 'y': 0.23 });
      expect((new Transformer2D(1, 0.23)).inverse('y').equal()).to.deep.equal({ 'x': 1, 'y': -0.23 });
    })
  })
});
