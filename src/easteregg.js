/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var easterEgg = (function (easterEgg) {
  /*eslint no-undef: 0 */
  'use strict';
  var STORAGE_NAMESPACE = '__cs_easteregg__';
  easterEgg.STORAGE_NAMESPACE = STORAGE_NAMESPACE;
  easterEgg.enableEasterEgg = function (windowMock) {
    var win = windowMock || window;
    try {
      win.localStorage.setItem(STORAGE_NAMESPACE, 'true');
    } catch (e) {
      //do nothing
    }
  };
  easterEgg.disableEasterEgg = function (windowMock) {
    var win = windowMock || window;
    try {
      win.localStorage.setItem(STORAGE_NAMESPACE, 'false');
    } catch (e) {
      //do nothing
    }
  };
  easterEgg.shouldShowEasterEgg = function (windowMock) {
    var win = windowMock || window;
    // Don't show in contexts where `easterEgg.disableEasterEgg()` wont work.
    if (win.top !== win.self) {
      return false;
    }
    try {
      return (win.localStorage.getItem(STORAGE_NAMESPACE) !== 'false');
    } catch (e) {
      //return false if support doesn't exist
      return false;
    }
  };


  if (window.addEventListener) {
    window.addEventListener('load', loadEgg, false);
  }
  else if (window.attachEvent) {
    window.attachEvent('onload', loadEgg);
  }


  function loadEgg() {
    try {
      if (easterEgg.shouldShowEasterEgg() !== false) {
        console.log("\n\n             _.-~-.\n           7''  Q..\\\n        _7         (_\n      _7  _/    _q.  /\n    _7 . ___  /VVvv-'_                                            .\n   7/ / /~- \\_\\\\      '-._     .-'                      /       //\n  ./ ( /-~-/||'=.__  '::. '-~'' {             ___   /  //     ./{\n V   V-~-~| ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /\n  VV/-~-~-|/ \\ .'__'. '.    '::                     _ _ _        ''.\n  / /~~~~||VVV/ /  \\ )  \\        _ __ ___   ___ ___(_) | | __ _   .::'\n / (~-~-~\\\\.-' /    \\'   \\::::. | '_ ` _ \\ / _ \\_  / | | |/ _` | :::'\n/..\\    /..\\__/      '     '::: | | | | | | (_) / /| | | | (_| | ::'\nvVVv    vVVv                 ': |_| |_| |_|\\___/___|_|_|_|\\__,_| ''\n\nHi there, nice to meet you!\n\nInterested in having a direct impact on hundreds of millions of users? Join\nMozilla, and become part of a global community that\u2019s helping to build a\nbrighter future for the Web.\n\nVisit https://careers.mozilla.org to learn about our current job openings.\nVisit https://www.mozilla.org/contribute for more ways to get involved and\nhelp support Mozilla.\n\n---\n\nIf you don't want to see this message next time, run this JS statement:\n\n    easterEgg.disableEasterEgg()\n");
      }
    } catch (e) {
      //do nothing
    }
  }

  return easterEgg;
})(easterEgg || {});
