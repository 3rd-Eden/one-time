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

  eventemitter.once('load', fn);
  eventemitter.once('error', fn);

  // do stuff
  eventemitter.emit('error', new Error('Failed to load, but still finished'));
  eventemitter.emit('load');
}

function example(fn) {
  fn = one(fn);

  fn();
  fn('also receives all arguments');
  fn('it returns the same value') === 'bar';
  fn('never');
  fn('gonna');
  fn('give');
  fn('you');
  fn('up');
}

example(function () { 
  return 'bar'
});
```

## License

MIT
