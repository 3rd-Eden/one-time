'use strict';

/**
 * Wrap callbacks to prevent double execution.
 *
 * @returns {Function} A wrapped callback which prevents execution.
 * @api public
 */
module.exports = function one(fn) {
  var called = false
    , value;

  return function time() {
    if (called) return value;

    called = true;
    return (value = fn.apply(this, arguments));
  };
};
