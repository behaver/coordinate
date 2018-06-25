'use strict';

const { TransformerPoint3D } = require('../index');
const expect = require("chai").expect;

describe('#TransformerPoint3D', () => {
  describe('#constructor', () => {
    it('The parameters have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new TransformerPoint3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new TransformerPoint3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new TransformerPoint3D;
      }).not.to.throw();
      expect(() => {
        let a = new TransformerPoint3D(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#from', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new TransformerPoint3D).from();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D).from(1, 2);
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D).from(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#equal', () => {
    it('The coordinate has not been transformed should equal the object itself.', () => {
      expect((new TransformerPoint3D(1, 2, 0.23)).equal()).to.deep.equal({ x: 1, y: 2, z: 0.23 });
    })
  });

  describe('#translate', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).translate();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).translate(1, 2, '23');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).translate(1, 2);
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).translate(1, 2, 0.23);
      }).not.to.throw();
    });

    it('Vreify the result from translate()', () => {
      expect((new TransformerPoint3D(1, 2, 0.23)).translate(-1, -2, -0.23).equal()).to.deep.equal({ x: 0, y: 0, z: 0 });
    })
  });

  describe('#scale', () => {
    it('The parameters have to be all numbers, and should not be undefined.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).scale();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).scale(1, 2, '23');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).scale(1, 2);
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).scale(1, 2, 0.23);
      }).not.to.throw();
    });
    it('Vreify the result from scale()', () => {
      expect((new TransformerPoint3D(1, 2, 0.23)).scale(-1, 2, 1).equal()).to.deep.equal({ x: -1, y: 4, z: 0.23 });
    })
  });

  describe('#rotateX', () => {
    it('The param has to be a number and can not be undefined.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateX();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateX('21');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateX(Math.PI / 2);
      }).not.to.throw();
    });

    it('Vreify the result from rotateX()', () => {
      expect((new TransformerPoint3D(1, 2, 3)).rotateX(Math.PI / 2).equal()).to.deep.equal({ x: 1, y: -3, z: 2 });
    });
  });

  describe('#rotateY', () => {
    it('The param has to be a number and can not be undefined.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateY();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateY('21');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateY(Math.PI / 2);
      }).not.to.throw();
    });

    it('Vreify the result from rotateY()', () => {
      expect((new TransformerPoint3D(1, 2, 3)).rotateY(Math.PI / 2).equal()).to.deep.equal({ x: 3, y: 2, z: -0.9999999999999998 });
    });
  });

  describe('#rotateZ', () => {
    it('The param has to be a number and can not be undefined.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateZ();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateZ('21');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotateZ(Math.PI / 2);
      }).not.to.throw();
    });

    it('Vreify the result from rotateZ()', () => {
      expect((new TransformerPoint3D(1, 2, 3)).rotateZ(Math.PI / 2).equal()).to.deep.equal({ x: -2, y: 1.0000000000000002, z: 3 });
    });
  });

  describe('#rotateVector', () => {
    it('Verify the result form rotateVector().', () => {
      expect((new TransformerPoint3D(1, 0, 1)).rotateVector(0.5 * Math.PI, 0, 4, 0).equal()).to.deep.equal({ x: 1, y: 0, z: -0.9999999999999997 });
      expect((new TransformerPoint3D(2, 0, 2)).rotateVector(0.5 * Math.PI, 0, 4, 0).equal()).to.deep.equal({ x: 2, y: 0, z: -1.9999999999999993 });
      expect((new TransformerPoint3D(1, 2, 3)).rotateVector(Math.PI / 2, 4, 0, 0).equal()).to.deep.equal({ x: 1, y: -3, z: 2.000000000000001 });
      expect((new TransformerPoint3D(1, 2, 3)).rotateVector(Math.PI / 2, 0, 3, 0).equal()).to.deep.equal({ x: 3, y: 2, z: -0.9999999999999993 });
      expect((new TransformerPoint3D(1, 2, 3)).rotateVector(Math.PI / 2, 0, 0, 2).equal()).to.deep.equal({ x: -2, y: 1.0000000000000004, z: 3 });
    });
  });

  describe('#rotate', () => {
    it('The param angle has to be a number.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate();
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate('21');
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2);
      }).not.to.throw();
    });

    it('The param options.axis has to be in [\'x\', \'y\', \'z\']', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axis: 12 });
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axis: 'w' });
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axis: 'y' });
      }).not.to.throw();
    });

    it('The param options.axialVector has to be a object about coordinate.', () => {
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: 12 });
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: {} });
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: { x: 12 } });
      }).to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: { x: 12, y: 2, z: 6 } });
      }).not.to.throw();
      expect(() => {
        (new TransformerPoint3D(1, 2, 0.23)).rotate(Math.PI / 2, { axialVector: { x: 12, y: 2, z: 6 }, axis: 'x' });
      }).not.to.throw();
    })
  });
});
