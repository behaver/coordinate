'use strict';

const SystemSwitcher3D = require('../src/3d/SystemSwitcher3D');
const expect = require("chai").expect;

describe('#SystemSwitcher3D', () => {
  describe('#constructor', () => {
    it('The parameters a, b and c have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new SystemSwitcher3D(1, 2);
      }).to.throw();
      expect(() => {
        let a = new SystemSwitcher3D(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = new SystemSwitcher3D;
      }).not.to.throw();
      expect(() => {
        let a = new SystemSwitcher3D(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#from', () => {
    it('The parameters a, b and c have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher3D).from(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).from(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).from();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).from(1, 2, 0.23);
      }).not.to.throw();
    });
    it('The param system has to be in [\'rc\', \'cc\', \'sc\']', () => {
      expect(() => {
        let a = (new SystemSwitcher3D).from(1, 2, 0.23, 'sc');
      }).not.to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).from(1, 2, 0.23, 'ec');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).from(1, 2, 0.23, 12);
      }).to.throw();
    });
  });

  describe('#to', () => {
    it('The param system has to be in [\'rc\', \'cc\', \'sc\']', () => {
      expect(() => {
        let a = (new SystemSwitcher3D(1, 2, 0.23)).to('sc');
        let b = (new SystemSwitcher3D(1, 2, 0.23)).to('rc');
        let c = (new SystemSwitcher3D(1, 2, 0.23)).to('cc');
      }).not.to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D(1, 2, 0.23)).to('eec');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D(1, 2, 0.23)).to(12);
      }).to.throw();
    });

    it('The method to(\'xx\') is equal the method toXX().', () => {
      expect((new SystemSwitcher3D(1, 2, 0.23)).to('sc')).to.deep.equal((new SystemSwitcher3D(1, 2, 0.23)).toSC());
      expect((new SystemSwitcher3D(1, 2, 0.23)).to('cc')).to.deep.equal((new SystemSwitcher3D(1, 2, 0.23)).toCC());
      expect((new SystemSwitcher3D(1, 2, 0.23)).to('rc')).to.deep.equal((new SystemSwitcher3D(1, 2, 0.23)).toRC());
    });
  });

  describe('#fromRC', () => {
    it('The parameters x, y and z have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher3D).fromRC(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromRC(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromRC();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromRC(1, 2, 0.23);
      }).not.to.throw();
    });
  });

  describe('#toRC', () => {
    it('Verify the result form toRC().', () => {
      expect((new SystemSwitcher3D(1, 2, 1)).toRC()).to.deep.equal({ x: 1, y: 2, z: 1 });
      expect((new SystemSwitcher3D(1, Math.PI, 1, 'cc')).toRC()).to.deep.equal({ x: -1, y: 1.2246467991473532e-16, z: 1 });
      expect((new SystemSwitcher3D(1, Math.PI / 2, Math.PI / 4, 'sc')).toRC()).to.deep.equal({ x: 0.7071067811865476, y: 0.7071067811865475, z: 6.123233995736766e-17 });
    });
  });

  describe('#fromCC', () => {
    it('The parameters rho, phi and z have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher3D).fromCC(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromCC(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromCC();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromCC(1, 2, 0.23);
      }).not.to.throw();
    });

    // it('The param theta has to be in [0, 2π].', () => {
    //   expect(() => {
    //     let a = (new SystemSwitcher3D).fromCC(1, 7, 0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SystemSwitcher3D).fromCC(1, -1, 0.23);
    //   }).to.throw();
    // });
  });

  describe('#toCC', () => {
    it('Verify the result form toCC().', () => {
      expect((new SystemSwitcher3D(1, 2, 1, 'cc')).toCC()).to.deep.equal({ rho: 1, phi: 2, z: 1 });
      expect((new SystemSwitcher3D(-1, 0, 1)).toCC()).to.deep.equal({ rho: 1, phi: Math.PI, z: 1 });
      expect((new SystemSwitcher3D(1, Math.PI / 2, Math.PI / 4, 'sc')).toCC()).to.deep.equal({ rho: 1, phi: Math.PI / 4, z: 6.123233995736766e-17 });
    });
  });

  describe('#fromSC', () => {
    it('The parameters r, theta and phi have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher3D).fromSC(1, 2);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromSC(1, 2, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromSC();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher3D).fromSC(1, 2, 0.23);
      }).not.to.throw();
    });

    // it('The param theta has to be in [0, π].', () => {
    //   expect(() => {
    //     let a = (new SystemSwitcher3D).fromSC(1, 4, 0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SystemSwitcher3D).fromSC(1, -1, 0.23);
    //   }).to.throw();
    // });

    // it('The param phi has to be in [0, 2π].', () => {
    //   expect(() => {
    //     let a = (new SystemSwitcher3D).fromSC(1, 2, -0.23);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SystemSwitcher3D).fromSC(1, 1, 7);
    //   }).to.throw();
    // });
  });

  describe('#toSC', () => {
    it('Verify the result form toSC().', () => {
      expect((new SystemSwitcher3D(0.7071067811865476, 0.7071067811865476, 0)).toSC()).to.deep.equal({ r: 1, theta: Math.PI / 2, phi: Math.PI / 4 });
      expect((new SystemSwitcher3D(1, Math.PI / 4, 0, 'cc')).toSC()).to.deep.equal({ r: 1, theta: Math.PI / 2, phi: Math.PI / 4 });
      expect((new SystemSwitcher3D(1, 2, 1, 'sc')).toSC()).to.deep.equal({ r: 1, theta: 2, phi: 1 });
    });
  });
});
