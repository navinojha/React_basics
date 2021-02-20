class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        <p>{this.state.visibility && "This is the text of the day"}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       <p>{visibility && "This is the text of the day"}</p>
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
