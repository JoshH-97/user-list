import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick} //onClick prop on button component,and any function received there is just passed onto the built in button component through its onClick prop.
    >
        {props.children}
    </button>
  );
};

export default Button;
