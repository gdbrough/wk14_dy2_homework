import React from "react";

const Hit = (props) => (
  <React.Fragment>
    <p>Number {props.position}: {props.name}</p>
    {/* {props.children} */}
    <img src={props.cover} alt={props.title}></img>
    <hr />
  </React.Fragment>

)

export default Hit;
