const fullname = "Navin Ojha";

// ES6 Arrow Function
const getName = (fullname) => {
  return fullname.split(" ")[0];
};

// Expression Syntax

const getName1 = (fullname) => fullname.split(" ")[0];

console.log(getName1(fullname));
