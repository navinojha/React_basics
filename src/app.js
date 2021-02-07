//console.log("App is running!");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormOptions();
  }
};

const onRemoveAll = () => {
  app.options.length = 0;
  renderFormOptions();
};

const appRoot = document.getElementById("app");

const renderFormOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button onClick={onRemoveAll}>Remove all</button>
      <p>{app.options.length}</p>
      <ol>
        {app.options.map((str) => (
          <li key={str}>{str}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderFormOptions();
