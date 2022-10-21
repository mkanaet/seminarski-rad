function OneMessage(props) {
  let styles = {
    backgroundColor: `${props.color}`,
  };
  return (
    <li>
      <div className="name_container">
        <div className="name">{props.name}</div>
      </div>
      <div className="name_container">
        <div className="message" style={styles}>
          {props.text}
        </div>
      </div>
    </li>
  );
}
export default OneMessage;
