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
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "codevolution";
var isBeginner = true;
var total = 0;
var name = "vishaws";
var sentence = "my name is " + name + " I am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple
var person1 = ["chris", 22];
// all start with 0 but if assign 5 then next will be added 1
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // 6
// If unsure use any then no safty check
var randomValue = 10;
randomValue = true;
randomValue = "Vishaws";
var myVariable = 10;
//console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();
// check if object has property name
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
// Unknown then you can not assign anything to that unless use type check
var myVariable1 = 10;
if (hasName(myVariable1)) {
    console.log(myVariable1.name);
}
//(myVariable1 as string).toLowerCase(); //it works if it is string
// type inference
var a;
a = 10;
a = true;
// infered from b
var b = 20;
// error
//b=true
// Union Type
var multiType;
multiType = 20;
multiType = true;
// Functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//add(5,'10'); // error
// Optional parameters and required ones
function add1(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
    return num1 + num2;
}
add1(5); // Optionals should be the last parameters
// Default parameters
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
    return num1 + num2;
}
add2(5); //15 will be back
// Interfaces
// The old way limited flexibility suppose if we have 100 of properties
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p1 = {
    firstName: "Bruce",
    lastName: "Wayne"
};
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee("Vishwas");
console.log(employee1.employeeName);
employee1.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegateing tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//Access Modifiers
// by default each properties are public
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.employeeName = name;
    }
    Employee2.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee2;
}());
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager2.prototype.delegateWork = function () {
        console.log("Manager delegateing tasks");
    };
    return Manager2;
}(Employee2));
var emp2 = new Employee2("saeid");
//console.log(emp2.employee); if employeeNmae is private the you can not accesss it
// Derive class can use protected
var Employee3 = /** @class */ (function () {
    function Employee3(name) {
        this.employeeName = name;
    }
    Employee3.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee3;
}());
var Manager3 = /** @class */ (function (_super) {
    __extends(Manager3, _super);
    function Manager3(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager3.prototype.delegateWork = function () {
        // derive class can still sees the base class protected properties
        console.log("Manager delegateing tasks  " + this.employeeName);
    };
    return Manager3;
}(Employee3));
