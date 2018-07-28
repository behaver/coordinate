'use strict';

const BaseCoordinate2D = require('../src/2d/BaseCoordinate2D');
const expect = require("chai").expect;

describe('#BaseCoordinate2D', () => {
  describe('#constructor', () => {
    it('The parameters a, b have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new BaseCoordinate2D(1);
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate2D(1, '23');
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate2D;
      }).not.to.throw();
      expect(() => {
        let a = new BaseCoordinate2D(1, 0.23);
      }).not.to.throw();
    });

    it('The param system has to be in [\'rc\', \'pc\'].', () => {
      expect(() => {
        let a = new BaseCoordinate2D(1, 0.23, 'rc');
        let b = new BaseCoordinate2D(1, 0.23, 'pc');
      }).not.to.throw();
      expect(() => {
        let a = new BaseCoordinate2D(1, 0.23, 'zz');
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate2D(1, 0.23, 12);
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate2D(1, 0.23, null);
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate2D(1, 0.23, []);
      }).to.throw();
    })
  })

  describe('#from', () => {
    it('The parameters a, b have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate2D).from();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D).from(1, '23');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D).from(1);
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D).from(1, 0.23);
      }).not.to.throw();
    });

    it('The param system has to be in [\'rc\', \'pc\'].', () => {
      expect(() => {
        let a = (new BaseCoordinate2D).from(1, 0.23, 'rc');
        let b = (new BaseCoordinate2D).from(1, 0.23, 'pc');
      }).not.to.throw();
      expect(() => {
        let a = (new BaseCoordinate2D).from(1, 0.23, 'zz');
      }).to.throw();
      expect(() => {
        let a = (new BaseCoordinate2D).from(1, 0.23, 12);
      }).to.throw();
      expect(() => {
        let a = (new BaseCoordinate2D).from(1, 0.23, null);
      }).to.throw();
      expect(() => {
        let a = (new BaseCoordinate2D).from(1, 0.23, []);
      }).to.throw();
    })
  })

  describe('#translate', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).translate();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).translate(1, '23');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).translate(1, );
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).translate(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#scale', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).scale();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).scale(1, '23');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).scale(1);
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).scale(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#rotate', () => {
    it('The param angle has to be a number.', () => {
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate('21');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate(Math.PI / 2);
      }).not.to.throw();
    });

    it('The param pivot has to be a object about a coordinate', () => {
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate(Math.PI / 2, { x: 1, y: 0.5 });
      }).not.to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate(Math.PI / 2, {});
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate(Math.PI / 2, { x: 1 });
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).rotate(Math.PI / 2, { x: 'z', y: 2 });
      }).to.throw();
    })
  });

  describe('#inverse', () => {
    it('The param axis has to be in [\'x\', \'y\'].', () => {
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).inverse(12);
        (new BaseCoordinate2D(1, 0.23)).inverse('z');
        (new BaseCoordinate2D(1, 0.23)).inverse(null);
        (new BaseCoordinate2D(1, 0.23)).inverse([]);
        (new BaseCoordinate2D(1, 0.23)).inverse({});
      }).to.throw();
      expect(() => {
        (new BaseCoordinate2D(1, 0.23)).inverse();
        (new BaseCoordinate2D(1, 0.23)).inverse('x');
        (new BaseCoordinate2D(1, 0.23)).inverse('y');
      }).not.to.throw();
    })
  })
});
