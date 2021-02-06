// Argument Object-> no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(5, 1));

// this keyword -> no longer bound

const user = {
  name: "Navin",
  cities: ["Bangalore", "Jamshedpur"],
  printPlacesLived() {
    //console.log(this.name);
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};

console.log(user.printPlacesLived());

// challenge area

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
