import React from "react";
import Character from "./Character";

const CharacterList = props => {
  const characters = props.characters.map((item, index) =>
    <Character
      key={index}
      item={item}
      removeCharacter={props.removeCharacter.bind(null, index)}
    />
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          {characters}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
