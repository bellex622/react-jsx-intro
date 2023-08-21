"use strict";

function Button(){
  const styles = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "4px",
    padding: "10px",
    borderStyle: "none",
    cursor: "pointer"
  };


  return <button style={ styles }> Don't Press Me! </button>
}