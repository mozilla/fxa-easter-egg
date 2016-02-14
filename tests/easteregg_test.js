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

  function resetWindow() {
    window.localStorage.clear();
    window.self = window;
    window.top = window.self;
  }

  describe('EasterEgg', function(){
    var STORAGE_NAMESPACE = easterEgg.STORAGE_NAMESPACE;
    describe('#enableEasterEgg()', function(){
      // reset state before every test, as otherwise the order of tests would matter
      beforeEach(function() {
        resetWindow();
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
      // reset state before every test, as otherwise the order of tests would matter
      beforeEach(function() {
        resetWindow();
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
      // reset state before every test, as otherwise the order of tests would matter
      beforeEach(function() {
        resetWindow();
      });

      it('should return a boolean', function(){
        assert.isBoolean(easterEgg.shouldShowEasterEgg(window));
      });

      it('should return false when not in top-level window', function(){
        window.self = {};
        assert.equal(false, easterEgg.shouldShowEasterEgg(window));
      });
    });
  });
})();
