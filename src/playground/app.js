class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddHere = this.handleAddHere.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        //if there is valid json object then only change the state
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log(json);
      localStorage.setItem("options", json);
    }
  }

  handleRemoveAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleRemoveOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  handlePick() {
    const randNumber = Math.trunc(Math.random() * this.state.options.length);
    const option = this.state.options[randNumber];
    alert(option);
  }

  handleAddHere(option) {
    // console.log(option);
    if (!option) {
      return "Enter a valid option to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Items already exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  render() {
    const subtitle = "Put Your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAllOptions={this.handleRemoveAllOptions}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddHere={this.handleAddHere} />
      </div>
    );
  }
}

/* Default Props for Stateless functional Component */
// IndecisionApp.defaultProps = {
//   options: [],
// };

/* This is a Stateless Functional Component */
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

/* Default Props for Stateless functional Component */
Header.defaultProps = {
  title: "Indecison App",
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   handlePick() {
//     alert("I want to pick you up babes");
//   }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What Should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAllOptions}>Remove All</button>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
//         {this.props.options.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleRemoveOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    const error = this.props.handleAddHere(option);

    this.setState(() => ({
      error: error,
    }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
