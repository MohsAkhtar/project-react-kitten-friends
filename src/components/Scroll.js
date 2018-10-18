import React from "react";

// here we are rendering the children within Scroll
const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
