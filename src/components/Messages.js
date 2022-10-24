import React from "react";
import OneMessage from "./OneMessage";

function Messages(props) {
  const { messages } = props;
  const currentUser = props.currentMember.username;

  return (
    <ul className="container">
      {messages.map((message, id) => (
        <OneMessage
          text={message.text}
          name={message.member.clientData.username}
          color={message.member.clientData.color}
          key={id}
          me={currentUser}
        ></OneMessage>
      ))}
    </ul>
  );
}

export default Messages;
