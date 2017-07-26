import React from "react";
const axios = require("axios");

const realm = "kazzak";
const apiKey = "pyrzs8jvv2t4wjuabeeg4mrzdam4sajr";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      charName: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let self = this;
    let char = this.state.charName;
    let url = `https://eu.api.battle.net/wow/character/${realm}/${char}?locale=en_GB&apikey=${apiKey}`;
    axios
      .get(url)
      .then(function(res) {
        console.log(res);
        self.props.onSearchFormSubmit(res.data);
        self.setState({ charName: "" });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <form action="#" id="getCharacterForm" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="charName"
            placeholder="Enter Character Name"
            required
            value={this.state.charName}
            onChange={event => this.setState({ charName: event.target.value })}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Search!
            </button>
          </span>
        </div>
      </form>
    );
  }
}
export default SearchForm;
