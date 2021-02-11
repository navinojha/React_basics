let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      <p>{visibility && "This is the text of the day"}</p>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
