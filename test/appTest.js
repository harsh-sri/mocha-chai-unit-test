"use strict";
const assert = require('chai').assert; // require('assert') default assert library for node
const app = require('../app');

var sayHelloResult = app.sayHello();
var addNumbersResult = app.addNumbers(5, 15);

describe('App', function(){

    describe('sayHello', function(){
        it('sayHello should return hello', function(){
          assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function(){
          assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers', function(){
        it('addNumbers should add two given numbers', function(){
          assert.isAbove(addNumbersResult, 15);
        })

        it('addNumbers should return type number', function(){
           assert.typeOf(addNumbersResult, 'number');
        });
    });


});
