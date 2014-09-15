'use strict';

var one = require('./')
  , called = 0;

var callme = one(function maybe(bar) {
  called++;

  if (bar !== 'bar') throw new Error('Invalid argument received');
  return 'foo';
});

if (callme('bar') !== 'foo') throw new Error('Invalid returned state');
if (callme('bar') !== 'foo') throw new Error('Invalid returned state');
if (callme('bar') !== 'foo') throw new Error('Invalid returned state');
if (callme('bar') !== 'foo') throw new Error('Invalid returned state');

if (called !== 1) throw new Error('Called multiple times');
