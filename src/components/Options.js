import React from "react";
import Option from "./Option";

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

export default Options;
