function OneMessage(props) {
  let styles = {
    backgroundColor: `${props.color}`,
  };
  const myMessage = props.name === props.me;
  const className = myMessage ? "name_container" : "name_container_not";
  return (
    <li>
      <div className={className}>
        <div className="name">{props.name}</div>
      </div>
      <div className={className}>
        <div className="message" style={styles}>
          {props.text}
        </div>
      </div>
    </li>
  );
}
export default OneMessage;
