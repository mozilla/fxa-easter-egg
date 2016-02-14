var assert = chai.assert;
describe('EasterEgg', function(){
  var STORAGE_NAMESPACE = easterEgg.STORAGE_NAMESPACE;
  beforeEach(function(){
    localStorage.clear();
    window.self = window;
  });

  describe('#enableEasterEgg()', function(){
    it('should return true when the easter egg is set', function(){
      easterEgg.enableEasterEgg();
      assert.equal('true', window.localStorage.getItem(STORAGE_NAMESPACE));
    });

    it('should not return true when the easter egg is not set', function(){
      assert.notEqual('true', window.localStorage.getItem(STORAGE_NAMESPACE));
    });
  });

  describe('#disableEasterEgg()', function(){
    it('should return false when the easter egg is disabled', function(){
      easterEgg.disableEasterEgg();
      assert.equal('false', window.localStorage.getItem(STORAGE_NAMESPACE));
    });

    it('should not return false when the easter egg is not disabled', function(){
      assert.notEqual('false', window.localStorage.getItem(STORAGE_NAMESPACE));
    });
  });

  describe('#shouldShowEasterEgg()', function(){
    it('should return a boolean', function(){
      assert.isBoolean(easterEgg.shouldShowEasterEgg());
    });
    it('should return false when not in top-level window', function(){
      window.self = {};
      assert.equal(false, easterEgg.shouldShowEasterEgg());
    });
  });
});
