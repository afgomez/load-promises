var DCLPromise;
export function DOMContentLoaded() {
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
export function windowLoad() {
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
