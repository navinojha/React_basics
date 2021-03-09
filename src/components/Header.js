import React from "react";

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

export default Header;
