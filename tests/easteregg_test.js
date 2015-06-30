'use strict';
var assert = chai.assert;
(function(){

  //stubbing the window.localStorage object
  //sinon cannot do this in FF, but will work in chrome
  //IIFE required as window.localStorage cannot be stubbed globally
  var window = {
    localStorage: {
      store: {},
      getItem: function(key) {
        if (this.store[key] !== undefined) {
          return this.store[key];
        }
        else{
          return false;
        }
      },
      setItem: function(key, data) {
        this.store[key] = data;
      },
      clear: function() {
        this.store = {};
      }
    }
  };

  describe('EasterEgg', function(){
    var STORAGE_NAMESPACE = 'Easter Egg for Cloud Services';
    describe('#enableEasterEgg()', function(){
      // clear storage before every test, as otherwise the order of tests would matter
      beforeEach(function() {
        window.localStorage.clear();
      });

      it('should return true when the easter egg is set', function(){
        easterEgg.enableEasterEgg(window);
        assert.equal('true', window.localStorage.getItem(STORAGE_NAMESPACE));
      });

      it('should not return true when the easter egg is not set', function(){
        assert.notEqual('true', window.localStorage.getItem(STORAGE_NAMESPACE));
      });

    });

    describe('#disableEasterEgg()', function(){
      // clear storage before every test, as otherwise the order of tests would matter
      beforeEach(function() {
        window.localStorage.clear();
      });

      it('should return false when the easter egg is disabled', function(){
        easterEgg.disableEasterEgg(window);
        assert.equal('false', window.localStorage.getItem(STORAGE_NAMESPACE));
      });

      it('should not return false when the easter egg is not disabled', function(){
        assert.notEqual('false', window.localStorage.getItem(STORAGE_NAMESPACE));
      });
    });

    describe('#shouldShowEasterEgg()', function(){
      it('should return a boolean', function(){
        assert.isBoolean(easterEgg.shouldShowEasterEgg(window));
      });
    });
  });
})();
