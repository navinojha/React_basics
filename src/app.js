class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddHere = this.handleAddHere.bind(this);
    this.state = {
      options: [],
    };
  }

  handleRemoveAllOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
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
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  render() {
    const title = "Indecison";
    const subtitle = "Put Your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAllOptions={this.handleRemoveAllOptions}
        />
        <AddOption handleAddHere={this.handleAddHere} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

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

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

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

    this.setState(() => {
      return {
        error: error,
      };
    });
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
