"use strict";
const assert = require('chai').assert; // require('assert') default assert library for node
const app = require('../app');

describe('App', function(){
    it('sayHello should return hello', function(){
      let result = app.sayHello();
      assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
      let result = app.sayHello();
      assert.typeOf(result, 'string');
    });

    it('addNumbers should add two given numbers', function(){
      let result = app.addNumbers(5, 15);
      assert.isAbove(result, 15);
    })

    it('addNumbers should return type number', function(){
       let result = app.addNumbers(5,5);
       assert.typeOf(result, 'number');
    })
});
