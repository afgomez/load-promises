(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.loadPromises = {})));
}(this, (function (exports) { 'use strict';

var DCLPromise;
function DOMContentLoaded() {
  if (!DCLPromise) {
    DCLPromise = new Promise(function(resolve) {
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
  }
  return DCLPromise;
}

var WLPromise;
function windowLoad() {
  if (!WLPromise) {
    WLPromise = new Promise(function(resolve) {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', function() {
          resolve();
        });
      }
    });
  }
  return WLPromise;
}

exports.DOMContentLoaded = DOMContentLoaded;
exports.windowLoad = windowLoad;

Object.defineProperty(exports, '__esModule', { value: true });

})));
