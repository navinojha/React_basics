class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old! `;
  }
}

class Student extends Person {
  constructor(name, age, major = "Not Decided") {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description + `and his major is ${this.major}`;
    } else {
      description = description + `and his major is ${this.major}`;
    }
    return description;
  }
}

const me = new Student("Navin Ojha", 23, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
