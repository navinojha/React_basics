import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
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
