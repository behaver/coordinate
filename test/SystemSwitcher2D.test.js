'use strict';

const SystemSwitcher2D = require('../src/2d/SystemSwitcher2D');
const expect = require("chai").expect;

describe('#SystemSwitcher2D', () => {
  describe('#constructor', () => {
    it('The parameters a, b and c have to be all numbers or all undefined.', () => {
      expect(() => {
        let a = new SystemSwitcher2D(1);
      }).to.throw();
      expect(() => {
        let a = new SystemSwitcher2D(1, '23');
      }).to.throw();
      expect(() => {
        let a = new SystemSwitcher2D;
      }).not.to.throw();
      expect(() => {
        let a = new SystemSwitcher2D(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#from', () => {
    it('The parameters a, b and c have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher2D).from(1);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).from(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).from();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).from(1, 0.23);
      }).not.to.throw();
    });
    it('The param system has to be in [\'rc\', \'pc\']', () => {
      expect(() => {
        let a = (new SystemSwitcher2D).from(1, 2, 'pc');
      }).not.to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).from(1, 0.23, 'ec');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).from(1, 0.23, 12);
      }).to.throw();
    });
  });

  describe('#to', () => {
    it('The param system has to be in [\'rc\', \'pc\']', () => {
      expect(() => {
        let a = (new SystemSwitcher2D(1, 0.23)).to('rc');
        let b = (new SystemSwitcher2D(1, 0.23)).to('pc');
      }).not.to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D(1, 2)).to('eec');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D(1, 0.23)).to(12);
      }).to.throw();
    });

    it('The method to(\'xx\') is equal the method toXX().', () => {
      expect((new SystemSwitcher2D(1, 2)).to('rc')).to.deep.equal((new SystemSwitcher2D(1, 2)).toRC());
      expect((new SystemSwitcher2D(1, 2)).to('pc')).to.deep.equal((new SystemSwitcher2D(1, 2)).toPC());
    });
  });

  describe('#fromRC', () => {
    it('The parameters x and y have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher2D).fromRC(1);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).fromRC(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).fromRC();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).fromRC(1, 0.23);
      }).not.to.throw();
    });
  });

  describe('#toRC', () => {
    it('Verify the result form toRC().', () => {
      expect((new SystemSwitcher2D(1, 2)).toRC()).to.deep.equal({ x: 1, y: 2 });
      expect((new SystemSwitcher2D(1, Math.PI / 4, 'pc')).toRC()).to.deep.equal({ x: 0.7071067811865476, y: 0.7071067811865475 });
    });
  });

  describe('#fromPC', () => {
    it('The parameters rho and theta have to be all numbers.', () => {
      expect(() => {
        let a = (new SystemSwitcher2D).fromPC(1);
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).fromPC(1, '23');
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).fromPC();
      }).to.throw();
      expect(() => {
        let a = (new SystemSwitcher2D).fromPC(1, 0.23);
      }).not.to.throw();
    });

    // it('The param theta has to be in [0, 2π].', () => {
    //   expect(() => {
    //     let a = (new SystemSwitcher2D).fromPC(1, 7);
    //   }).to.throw();
    //   expect(() => {
    //     let a = (new SystemSwitcher2D).fromPC(1, -1);
    //   }).to.throw();
    // });
  });

  describe('#toPC', () => {
    it('Verify the result form toPC().', () => {
      expect((new SystemSwitcher2D(1, 2, 'pc')).toPC()).to.deep.equal({ rho: 1, theta: 2 });
      expect((new SystemSwitcher2D(0.7071067811865476, 0.7071067811865476, 'rc')).toPC()).to.deep.equal({ rho: 1, theta: Math.PI / 4});
    });
  });
});
