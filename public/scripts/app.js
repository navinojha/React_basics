"use strict";

var fullname = "Navin Ojha";

// ES6 Arrow Function
var getName = function getName(fullname) {
  return fullname.split(" ")[0];
};

// Expression Syntax

var getName1 = function getName1(fullname) {
  return fullname.split(" ")[0];
};

console.log(getName1(fullname));
