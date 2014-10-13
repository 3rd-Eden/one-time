# one-time

[![Build Status](https://travis-ci.org/unshiftio/one-time.svg?branch=master)](https://travis-ci.org/unshiftio/one-time)
[![NPM version](https://badge.fury.io/js/one-time.svg)](http://badge.fury.io/js/one-time)
[![Coverage Status](https://img.shields.io/coveralls/unshiftio/one-time.svg)](https://coveralls.io/r/unshiftio/one-time?branch=master)

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

### Why not `once`?

The main reason is that `once` cannot be used in a browser environment unless it's
ES5 compatible. For a module as simple as this I find that unacceptable. In addition
to that it super heavy on the dependency cite. So it's totally not suitable to be
used in client side applications.

## License

MIT
