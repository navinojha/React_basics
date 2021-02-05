"use strict";

//console.log("App is running!");

var user = {
  name: "Navin",
  age: "23",
  location: "Bangalore"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location : ",
      location
    );
  }
}

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
