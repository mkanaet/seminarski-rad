import React from "react";
import OneMessage from "./OneMessage";
function Messages(props) {
  return (
    <ul className="container">
      {props.text.map((data, id) => (
        <OneMessage
          text={data}
          name={props.name}
          color={props.color}
          key={id}
        ></OneMessage>
      ))}
    </ul>
  );
}

export default Messages;
