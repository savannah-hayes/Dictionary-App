import React from "react";
import { Paragraph } from "../styled-components/Examples-css";

function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <Paragraph>
          <em>Example: {props.examples}</em>
        </Paragraph>
      </div>
    );
  } else {
    return null;
  }
}

export default Examples;
