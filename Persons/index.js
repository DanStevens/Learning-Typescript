"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var PersonBase = /** @class */ (function () {
    function PersonBase(name, dateOfBirth) {
        this.canSignContracts = false;
        this.category = '';
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    PersonBase.prototype.getAge = function () {
        return moment_1.default().diff(moment_1.default(this.dateOfBirth), 'years');
    };
    PersonBase.prototype.toString = function () {
        return this.name + " is " + this.category + " aged " + this.getAge() + ". " +
            ("This person " + (this.canSignContracts ? 'is' : 'is not') + " old enough to sign contracts");
    };
    return PersonBase;
}());
var Adult = /** @class */ (function (_super) {
    __extends(Adult, _super);
    function Adult(name, dateOfBirth) {
        var _this = _super.call(this, name, dateOfBirth) || this;
        _this.canSignContracts = true;
        _this.category = 'an adult';
        return _this;
    }
    return Adult;
}(PersonBase));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, dateOfBirth) {
        var _this = _super.call(this, name, dateOfBirth) || this;
        _this.canSignContracts = false;
        _this.category = 'a child';
        return _this;
    }
    return Child;
}(PersonBase));
var Infant = /** @class */ (function (_super) {
    __extends(Infant, _super);
    function Infant(name, dateOfBirth) {
        var _this = _super.call(this, name, dateOfBirth) || this;
        _this.canSignContracts = false;
        _this.category = 'an infant';
        return _this;
    }
    return Infant;
}(PersonBase));
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.new = function (name, dateOfBirth) {
        var age = moment_1.default().diff(moment_1.default(dateOfBirth), 'years');
        if (age < 2)
            return new Infant(name, dateOfBirth);
        if (age < 18)
            return new Child(name, dateOfBirth);
        return new Adult(name, dateOfBirth);
    };
    return PersonFactory;
}());
var alice = PersonFactory.new('Alice', moment_1.default('2018-08-03').toDate());
console.log(alice.toString());
var bob = PersonFactory.new('Bob', moment_1.default('2015-07-22').toDate());
console.log(bob.toString());
var charlie = PersonFactory.new('Charlie', moment_1.default('1972-03-02').toDate());
console.log(charlie.toString());
