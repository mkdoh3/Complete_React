"use strict";

var app = {
  title: 'Indecision App',
  subtitle: "Trust me, I'm a computer!",
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.optionInput.value;
  if (option) {
    app.options.push(option);
    event.target.elements.optionInput.value = "";
  }
  renderApp();
};

var resetOptions = function resetOptions() {
  app.options = [];
  renderApp();
};

var numbers = [1, 2, 3];

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "h4",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      " ",
      app.options.length > 0 ? 'Here are your options: ' : 'No Options :('
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: resetOptions },
      "Reset Options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "optionInput" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
