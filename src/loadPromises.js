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

export { DOMContentLoaded, windowLoad };
