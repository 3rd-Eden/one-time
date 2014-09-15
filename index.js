'use strict';

module.exports = function one(fn) {
  var called = false
    , value;

  return function time() {
    if (called) return value;

    called = true;

    for ( var i = 0, l = arguments.length, args = new Array(l); i < l; i++) {
      args[i] = arguments[i];
    }

    return (value = fn.apply(this, args));
  };
};
