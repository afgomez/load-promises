(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.loadPromises = {})));
}(this, (function (exports) { 'use strict';

var DOMContentLoaded = new Promise(function(resolve) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      resolve();
    });
  }
});

var windowLoad = new Promise(function(resolve) {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    window.addEventListener('load', function() {
      resolve();
    });
  }
});

exports.DOMContentLoaded = DOMContentLoaded;
exports.windowLoad = windowLoad;

Object.defineProperty(exports, '__esModule', { value: true });

})));
