"use strict";

//console.log("App is running!");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "THis is the h1 tag"
  ),
  React.createElement(
    "p",
    null,
    "Does this change!"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
