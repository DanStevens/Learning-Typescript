"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataProvider_1 = __importDefault(require("./helpers/dataProvider"));
describe('spec/SimpleJasmine.spec.ts', function () {
    it('should fail', function () {
        var undefinedValue = "test";
        expect(undefinedValue).toBeDefined('should be defined');
    });
    it("expect value toBe(2)", function () {
        var twoValue = 2;
        expect(twoValue).toBe(2);
    });
    it("expect string toContain value ", function () {
        var testString = "12345a";
        expect(testString).toContain("a");
    });
    it("expect true to be truthy", function () {
        var trueValue = true;
        expect(trueValue).toBeTruthy();
    });
    it("expect false not to be truthy", function () {
        var falseValue = false;
        expect(falseValue).not.toBeTruthy();
    });
    it("expect value not to be null", function () {
        var definedValue = 2;
        expect(definedValue).not.toBeNull();
    });
    it("expect objects to be equal", function () {
        var obj1 = { a: 1, b: 2 };
        var obj2 = { b: 2, a: 1 };
        expect(obj1).toEqual(obj2);
    });
});
describe("beforeEach and afterEach tests", function () {
    var myString;
    beforeEach(function () {
        myString = "this is a string";
    });
    afterEach(function () {
        expect(myString).toBeUndefined();
    });
    it("should find then clear the myString variable", function () {
        expect(myString).toEqual("this is a string");
        myString = undefined;
    });
});
xdescribe("This is a skipped suite", function () {
    it("This is not a forced test", function () {
        expect(true).toBeFalsy('true should be false');
    });
    fit("This is a forced test", function () {
        expect(false).toBeFalsy();
    });
});
describe("data driven tests", function () {
    dataProvider_1.default("valid values", [
        "first string",
        "second_string",
        "!!string!!"
    ], function (value) {
        it(value + " should contain 'string'", function () {
            expect(value).toContain("string");
        });
    });
});
