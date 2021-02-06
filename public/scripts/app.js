"use strict";

// Argument Object-> no longer bound with arrow functions

var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};

console.log(add(5, 1));

// this keyword -> no longer bound

var user = {
  name: "Navin",
  cities: ["Bangalore", "Jamshedpur"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    //console.log(this.name);
    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};

console.log(user.printPlacesLived());

// challenge area

var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
