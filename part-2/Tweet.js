"use strict";

function Tweet({ username, name, date, message }) {

const styles = {
  border: "3px black",
  borderRadius: "4px",
  backgroundColor: "darkBlue",
  color: "white"
}

  return (
    <div style={ styles } >
      <h3> {name} </h3>
      <p> @{username} </p>
      <p>{message} </p>
      <p> {date} </p>
    </div>
  );
}