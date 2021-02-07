"use strict";

//console.log("App is running!");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormOptions();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options.length = 0;
  renderFormOptions();
};

var onMakeDecision = function onMakeDecision() {
  var randNumber = Math.trunc(Math.random() * app.options.length);
  var option = app.options[randNumber];
  alert(option);
};

var appRoot = document.getElementById("app");

var renderFormOptions = function renderFormOptions() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length == 0, onClick: onMakeDecision },
      "What should I do ?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove all"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (str) {
        return React.createElement(
          "li",
          { key: str },
          str
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderFormOptions();
