# one-time

Call the supplied function exactly one time. This prevents double callback
execution. This module can be used on both node and browsers using browserify.
No magical ES5/6 methods used unlike the `once` module does.

## Installation

```
npm install one-time
```

## Usage

Simply supply the function with the function that should only be called one
time:

```js
var one = require('one-time');

function load(file, fn) {
  fn = one(fn);

  loader.load('file');
  loader.once('load', fn);
  loader.once('error', fn);
}
```

## License 

MIT
