/**
 * Test for class Card.
 */
"use strict";

/* global describe it */

var assert = require("assert");
const Module = require("../index");

describe("Testing Module", function() {

    describe("Testing so function returns correct type", function() {
        it("catchPhrase should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getCatchPrase()));
        });

        it("joke should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getJoke()));
        });

        it("quote should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getQuote()));
        });

        it("asci should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getAsci()));
        });
    });

    describe("Testing so getCheckCommand returns correct type", function() {
        it("/catchPhrase should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getCheckCommand('/catchPhrase')));
        });

        it("/joke should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getCheckCommand('/joke')));
        });

        it("/asci should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getCheckCommand('/asci')));
        });

        it("/quote should return string", function() {
            let module = new Module();

            assert("string", typeof(module.getCheckCommand('/quote')));
        });
    });

    describe("Testing type of object in Module", function() {
        it("checking 'catchPhrase'", function() {
            let module = new Module();

            assert("object", typeof(module.catchPhrase));
        });

        it("checking 'asci'", function() {
            let module = new Module();

            assert("object", typeof(module.asci));
        });

        it("checking 'joke'", function() {
            let module = new Module();

            assert("object", typeof(module.joke));
        });

        it("checking 'quote'", function() {
            let module = new Module();

            assert("object", typeof(module.quote));
        });

    });

    describe("Testing size", function() {
        it("checking 'catchPhrase'", function() {
            let module = new Module();

            assert.equal(6, module.getCatchPraseSize());
        });

        it("checking 'joke'", function() {
            let module = new Module();

            assert.equal(2, module.getJokeSize());
        });

        it("checking 'quote'", function() {
            let module = new Module();

            assert.equal(7, module.getQuoteSize());
        });

        it("checking 'asci'", function() {
            let module = new Module();

            assert.equal(9, module.getAsciSize());
        });


    });


});
