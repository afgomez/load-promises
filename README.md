# loadPromises

Expose the page load events as promises. Works in any browser that
[supports promises](https://caniuse.com/#feat=promises), or that has a
compatible polyfill.

## Install

With NPM

```
$ npm install load-promises
```

With Yarn

```
$ yarn add load-promises
```

## Usage

With webpack. The package has a `module` field. Tree shaking is possible if you
only use one of the events.

```js
import { DOMContentLoaded, windowLoad } from 'load-promises';

// Equivalent of $(document).ready();
DOMContentLoaded().then(() => {
  // ...
});

// Equivalent of $(window).load();
windowLoad().then(() => {
  // ...
});
```

In a browser. Both promises are namespaced in `loadPromises`

```html
<html>
  <head>
    <script src="loadPromises.umd.js"></script>
    <script>
      // Equivalent of $(document).ready();
      loadPromises.DOMContentLoaded().then(function() {
        // ...
      });

      // Equivalent of $(window).load();
      loadPromises.windowLoad().then(function() {
        // ...
      });
    </script>
  </head>
  <body></body>
</html>
```
