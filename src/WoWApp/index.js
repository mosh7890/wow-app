import React from "react";
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";

class WoWApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
    this.removeCharacter = this.removeCharacter.bind(this);
  }

  onSearchFormSubmit(data) {
    let tempObj = data;

    this.setState(prevState => ({
      characters: prevState.characters.concat(tempObj)
    }));
  }

  removeCharacter(index) {
    let tempArr = this.state.characters.slice();
    tempArr.splice(index, 1);
    this.setState({
      characters: tempArr
    });
  }

  render() {
    return (
      <div>
        <h2>WoW App</h2>
        <SearchForm onSearchFormSubmit={this.onSearchFormSubmit} />
        <CharacterList
          characters={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default WoWApp;
