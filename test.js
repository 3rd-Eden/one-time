describe('one-time', function () {
  'use strict';

  var assume = require('assume')
    , ona = require('./async')
    , one = require('./');

  describe('(normal)', function () {
    it('is exported as a function that returns a function', function () {
      assume(one).is.a('function');
      assume(one(function(){})).is.a('function');
    });

    it('only calls the supplied function once', function (next) {
      next = one(next);

      next();
      next();
      next();
      next();
    });

    it('returns the same value as the called function every single time', function () {
      var foo = one(function () {
        return 'bar';
      });

      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
      assume(foo()).equals('bar');
    });

    it('the returned function uses the same displayName as the given fn', function () {
      var foo = one(function banana() {
        return 'bar';
      });

      assume(foo.displayName).equals('banana');
    });
  });

  describe('(async)', function () {
    it('is exported as a function that returns asyncfunction', async function () {
      assume(ona).is.a('function');
      assume(ona(async function () {})).is.a('asyncfunction');
    });

    it('only calls the supplied function once', async function () {
      var counter = 0;
      var next = ona(async function () {
        counter++;
      });

      await next();
      await next();
      await next();
      await next();
    });

    it('returns the same value as the called function every single time', async function () {
      var foo = ona(async function () {
        return 'bar';
      });

      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
      assume(await foo()).equals('bar');
    });

    it('the returned function uses the same displayName as the given fn', async function () {
      var foo = ona(async function banana() {
        return 'bar';
      });

      assume(foo.displayName).equals('banana');
    });
  });
});
