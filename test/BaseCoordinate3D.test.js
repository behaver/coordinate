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

    it('Vreify the result from translate()', () => {
      expect((new BaseCoordinate3D(1, 2, 0.23)).translate(-1, -2, -0.23).equal()).to.deep.equal({ x: 0, y: 0, z: 0 });
    })
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
    it('Vreify the result from scale()', () => {
      expect((new BaseCoordinate3D(1, 2, 0.23)).scale(-1, 2, 1).equal()).to.deep.equal({ x: -1, y: 4, z: 0.23 });
    })
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

    it('Vreify the result from rotateX()', () => {
      expect((new BaseCoordinate3D(1, 2, 3)).rotateX(Math.PI / 2).equal()).to.deep.equal({ x: 1, y: -3, z: 2 });
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

    it('Vreify the result from rotateY()', () => {
      expect((new BaseCoordinate3D(1, 2, 3)).rotateY(Math.PI / 2).equal()).to.deep.equal({ x: 3, y: 2, z: -0.9999999999999998 });
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

    it('Vreify the result from rotateZ()', () => {
      expect((new BaseCoordinate3D(1, 2, 3)).rotateZ(Math.PI / 2).equal()).to.deep.equal({ x: -2, y: 1.0000000000000002, z: 3 });
    });
  });

  describe('#rotateVector', () => {
    it('Verify the result form rotateVector().', () => {
      expect((new BaseCoordinate3D(1, 0, 1)).rotateVector(0.5 * Math.PI, 0, 4, 0).equal()).to.deep.equal({ x: 1, y: 0, z: -0.9999999999999997 });
      expect((new BaseCoordinate3D(2, 0, 2)).rotateVector(0.5 * Math.PI, 0, 4, 0).equal()).to.deep.equal({ x: 2, y: 0, z: -1.9999999999999993 });
      expect((new BaseCoordinate3D(1, 2, 3)).rotateVector(Math.PI / 2, 4, 0, 0).equal()).to.deep.equal({ x: 1, y: -3, z: 2.000000000000001 });
      expect((new BaseCoordinate3D(1, 2, 3)).rotateVector(Math.PI / 2, 0, 3, 0).equal()).to.deep.equal({ x: 3, y: 2, z: -0.9999999999999993 });
      expect((new BaseCoordinate3D(1, 2, 3)).rotateVector(Math.PI / 2, 0, 0, 2).equal()).to.deep.equal({ x: -2, y: 1.0000000000000004, z: 3 });
    });
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

    it('Vreify the result from inverse.', () => {
      expect((new BaseCoordinate3D(1, 2, 0.23)).inverse('x').equal()).to.deep.equal({ 'x': -1, 'y': 2, 'z': 0.23 });
      expect((new BaseCoordinate3D(1, 2, 0.23)).inverse('y').equal()).to.deep.equal({ 'x': 1, 'y': -2, 'z': 0.23 });
      expect((new BaseCoordinate3D(1, 2, 0.23)).inverse('z').equal()).to.deep.equal({ 'x': 1, 'y': 2, 'z': -0.23 });
    })
  })

  describe('#equal', () => {
    it('The coordinate has not been transformed should equal the object itself.', () => {
      expect((new BaseCoordinate3D(1, 2, 0.23)).equal()).to.deep.equal({ x: 1, y: 2, z: 0.23 });
    })

    it('Verify the result form multi-transform with chain.', () => {
      expect((new BaseCoordinate3D(1, 2, 0.23)).scale(-2, 1, 2).translate(-2, 2, 1).equal()).to.deep.equal({ x: -4, y: 4, z: 1.46 });
    })
  });
})
