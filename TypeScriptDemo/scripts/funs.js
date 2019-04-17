var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Thing = /** @class */ (function () {
    function Thing() {
    }
    Thing.prototype.fun = function (x, y, z) {
        return x === y;
    };
    return Thing;
}());
var t;
t = new Thing();
t.fun(1, "2");
t.fun(1, 2, 3);
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this._FirstName = fName;
        this._LastName = lName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._FirstName;
        },
        set: function (a) {
            this._FirstName = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "happy", {
        get: function () {
            return "happiness";
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person("Bob", "Wooley");
var f = p.firstName;
p.firstName = "Bully";
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(wge) {
        var _this = _super.call(this, "Jane", "Doe") || this;
        _this.wage = wge;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "wage", {
        get: function () {
            return this._Wage;
        },
        set: function (val) {
            this._Wage = val;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}(Person));
var e = new Employee(30);
e.firstName = "Sally";
//e.newMagicThing = "asdfasdf";
this.call("HelloWorld", "bob");
//# sourceMappingURL=funs.js.map