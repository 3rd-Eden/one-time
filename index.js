'use strict';

/**
 * Wrap callbacks to prevent double execution.
 *
 * @param {Function} fn Function that should only be called once.
 * @returns {Function} A wrapped callback which prevents execution.
 * @api public
 */
module.exports = function one(fn) {
  var called = false
    , value;

  return function time() {
    if (called) return value;

    called = true;
    value = fn.apply(this, arguments);
    fn = null;

    return value;
  };
};
