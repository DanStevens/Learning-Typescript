"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('Hello, friend!');
var myString;
var myNumber;
var myBoolean;
myString = "1";
myNumber = 1;
myBoolean = true;
myString = myNumber.toString();
myBoolean = myString === "test";
myNumber = myBoolean ? 1 : 0;
console.log('myString', myString);
console.log('myBoolean', myBoolean);
console.log('myNumber', myNumber);
var complexType = { name: "myName", id: 1 };
complexType = { name: "extraproperty", id: 2, extraProp: true };
var openDoor = 0 /* Open */;
console.log("openDoor is: " + openDoor);
var globalString;
setGlobalString();
console.log("globalString : " + globalString);
function setGlobalString() {
    globalString = "this has been set";
}
function doSomethingWithACallback(initialText, callback) {
    console.log("Inside doSomethingWithCallback(" + initialText + ")");
    callback(initialText);
}
doSomethingWithACallback("hi", function (s) { return console.log("s", s); });
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
var thirdObj = { job: "object" };
var forthObj = __assign({}, firstObj, thirdObj);
//# sourceMappingURL=index.js.map