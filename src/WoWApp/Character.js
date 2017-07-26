import React from "react";

const Character = props =>
  <div className="col-lg-4">
    <h2>
      {props.item.name}
    </h2>
    <span
      className="glyphicon glyphicon-trash"
      onClick={props.removeCharacter}
    />
    <hr />
  </div>;

export default Character;
