'use strict';

const BaseCoordinate3D = require('../src/3d/BaseCoordinate3D');
const expect = require("chai").expect;

describe('#BaseCoordinate3D', () => {

  describe('#constructor', () => {
    it('The parameters a, b, c have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new BaseCoordinate3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate3D;
      }).not.to.throw();
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param system has to be in [\'rc\', \'cc\', \'sc\'].', () => {
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, 0.23, 'rc');
        let b = new BaseCoordinate3D(1, 2, 0.23, 'cc');
        let c = new BaseCoordinate3D(1, 2, 0.23, 'sc');
      }).not.to.throw();
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, 0.23, 'zz');
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, 0.23, 12);
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, 0.23, null);
      }).to.throw();
      expect(() => {
        let a = new BaseCoordinate3D(1, 2, 0.23, []);
      }).to.throw();
    })
  })

  describe('#from', () => {
    it('The parameters a, b, c have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate3D).from();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D).from(1, 2);
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D).from(1, 2, 0.23);
      }).not.to.throw();
    });

    it('The param system has to be in [\'rc\', \'cc\', \'sc\'].', () => {
      expect(() => {
        let a = (new BaseCoordinate3D).from(1, 2, 0.23, 'rc');
        let b = (new BaseCoordinate3D).from(1, 2, 0.23, 'cc');
        let c = (new BaseCoordinate3D).from(1, 2, 0.23, 'sc');
      }).not.to.throw();
      expect(() => {
        let a = (new BaseCoordinate3D).from(1, 2, 0.23, 'zz');
      }).to.throw();
      expect(() => {
        let a = (new BaseCoordinate3D).from(1, 2, 0.23, 12);
      }).to.throw();
      expect(() => {
        let a = (new BaseCoordinate3D).from(1, 2, 0.23, null);
      }).to.throw();
      expect(() => {
        let a = (new BaseCoordinate3D).from(1, 2, 0.23, []);
      }).to.throw();
    })
  });

  describe('#translate', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).translate();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).translate(1, 2, '23');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).translate(1, 2);
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).translate(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#scale', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).scale();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).scale(1, 2, '23');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).scale(1, 2);
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).scale(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#rotateX', () => {
    it('The param has to be a number and can not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateX();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateX('21');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateX(Math.PI / 2);
      }).not.to.throw();
    });
  });

  describe('#rotateY', () => {
    it('The param has to be a number and can not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateY();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateY('21');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateY(Math.PI / 2);
      }).not.to.throw();
    });
  });

  describe('#rotateZ', () => {
    it('The param has to be a number and can not be undefined.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateZ();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateZ('21');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotateZ(Math.PI / 2);
      }).not.to.throw();
    });
  });

  describe('#rotateVector', () => {
    
  });

  describe('#rotate', () => {
    it('The param angle has to be a number.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate();
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate('21');
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2);
      }).not.to.throw();
    });

    it('The param options.axis has to be in [\'x\', \'y\', \'z\']', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axis: 12 });
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axis: 'w' });
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axis: 'y' });
      }).not.to.throw();
    });

    it('The param options.axialVector has to be a object about coordinate.', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: 12 });
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: {} });
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: { x: 12 } });
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: { x: 12, y: 2, z: 6 } });
      }).not.to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: { x: 12, y: 2, z: 6 }, axis: 'x' });
      }).not.to.throw();
    })
  });

  describe('#inverse', () => {
    it('The param axis has to be in [\'x\', \'y\', \'z\'].', () => {
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).inverse(12);
        (new BaseCoordinate3D(1, 2, 0.23)).inverse('a');
        (new BaseCoordinate3D(1, 2, 0.23)).inverse(null);
        (new BaseCoordinate3D(1, 2, 0.23)).inverse([]);
        (new BaseCoordinate3D(1, 2, 0.23)).inverse({});
      }).to.throw();
      expect(() => {
        (new BaseCoordinate3D(1, 2, 0.23)).inverse();
        (new BaseCoordinate3D(1, 2, 0.23)).inverse('x');
        (new BaseCoordinate3D(1, 2, 0.23)).inverse('y');
        (new BaseCoordinate3D(1, 2, 0.23)).inverse('z');
      }).not.to.throw();
    })
  })
})
