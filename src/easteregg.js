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
        // Death from above logo, we can use it someday.
        //console.log("       <--oooooooooo                                                                                                                      \n     <-00000000000000000000                                                                                                               \n   <--000000000000      000000000                                                                                                         \n    <--0000000000000000000000000                                                                                                          \n  <<<---00000000000000  VVVV    \\                                                                                                         \n   <<<<---0000000000000000000    \\                                                                                                        \n <<<<<<--00000000000        \\     \\       ___  ___         _ _ _         _____ _                 _   _____                 _              \n  <<---000000000             \\00o 0o      |  \\/  |        (_| | |       /  __ | |               | | /  ___|               (_)             \n <---00000000                  000o 0o    | .  . | ___ _____| | | __ _  | /  \\| | ___  _   _  __| | \\ `--.  ___ _ ____   ___  ___ ___ ___ \n<--000000000o         A  AA      000 0o   | |\\/| |/ _ |_  | | | |/ _` | | |   | |/ _ \\| | | |/ _` |  `--. \\/ _ | '__\\ \\ / | |/ __/ _ / __|\n 0000-VV-00000      oo000000      00 00   | |  | | (_) / /| | | | (_| | | \\__/| | (_) | |_| | (_| | /\\__/ |  __| |   \\ V /| | (_|  __\\__ \\\n 0000-V-0000000000000000000       00000   \\_|  |_/\\___/___|_|_|_|\\__,_|  \\____|_|\\___/ \\__,_|\\__,_| \\____/ \\___|_|    \\_/ |_|\\___\\___|___/\n 0000000000   oo000oo              0000   ______ _____ ___ _____ _   _      ____________ ________  ___       ___ ______ _____ _   _ _____ \n  000000000      V                 0000   |  _  |  ___/ _ |_   _| | | |     |  ___| ___ |  _  |  \\/  |      / _ \\| ___ |  _  | | | |  ___|\n  0000000000                       000    | | | | |__/ /_\\ \\| | | |_| |     | |_  | |_/ | | | | .  . |     / /_\\ | |_/ | | | | | | | |__  \n   0000-VV-00oo                 oo000     | | | |  __|  _  || | |  _  |     |  _| |    /| | | | |\\/| |     |  _  | ___ | | | | | | |  __| \n    0000-V-00000oo          oo000000      | |/ /| |__| | | || | | | | |     | |   | |\\ \\\\ \\_/ | |  | |     | | | | |_/ \\ \\_/ \\ \\_/ | |___ \n      000000000000000000000000000         |___/ \\____\\_| |_/\\_/ \\_| |_/     \\_|   \\_| \\_|\\___/\\_|  |_/     \\_| |_\\____/ \\___/ \\___/\\____/ \n         000000000000000000000                                                                                                            \n             0000000000000                                                                                                                \nHi there, nice to meet you!\n\nInterested in having a direct impact on hundreds of millions of users? Join\nMozilla, and become part of a global community that\u2019s helping to build a\nbrighter future for the Web.\n\nVisit https://careers.mozilla.org to learn about our current job openings.\nVisit https://www.mozilla.org/contribute for more ways to get involved and\nhelp support Mozilla.\n\n---\n\n If you don't want to see this message next time, run this JS statement:\n\n easterEgg.disableEasterEgg() \n\n in the terminal below.");
        console.log('\n\n');
        console.log("             _.-~-.\n           7''  Q..\\\n        _7         (_\n      _7  _/    _q.  /\n    _7 . ___  /VVvv-'_                                            .\n   7/ / /~- \\_\\\\      '-._     .-'                      /       //\n  ./ ( /-~-/||'=.__  '::. '-~'' {             ___   /  //     ./{\n V   V-~-~| ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /\n  VV/-~-~-|/ \\ .'__'. '.    '::                     _ _ _        ''.\n  / /~~~~||VVV/ /  \\ )  \\        _ __ ___   ___ ___(_) | | __ _   .::'\n / (~-~-~\\\\.-' /    \\'   \\::::. | '_ ` _ \\ / _ \\_  / | | |/ _` | :::'\n/..\\    /..\\__/      '     '::: | | | | | | (_) / /| | | | (_| | ::'\nvVVv    vVVv                 ': |_| |_| |_|\\___/___|_|_|_|\\__,_| ''\n\nHi there, nice to meet you!\n\nInterested in having a direct impact on hundreds of millions of users? Join\nMozilla, and become part of a global community that\u2019s helping to build a\nbrighter future for the Web.\n\nVisit https://careers.mozilla.org to learn about our current job openings.\nVisit https://www.mozilla.org/contribute for more ways to get involved and\nhelp support Mozilla.\n\n---\n\nIf you don't want to see this message next time, run this JS statement:\n\n    easterEgg.disableEasterEgg()\n");
      }
    } catch (e) {
      //do nothing
    }
  }

  return easterEgg;
})(easterEgg || {});
