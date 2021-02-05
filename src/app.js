//console.log("App is running!");

var template = (
  <div>
    <h1>THis is the h1 tag</h1>
    <p>Does this change!</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
