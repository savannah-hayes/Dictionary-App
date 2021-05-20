import React from "react";

function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <p className="example">
          <em>Ex: {props.examples}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Examples;
