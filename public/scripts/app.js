"use strict";

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide Details" : "Show Details"
    ),
    React.createElement(
      "p",
      null,
      visibility && "This is the text of the day"
    )
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
