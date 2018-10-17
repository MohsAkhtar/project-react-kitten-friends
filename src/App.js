import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { kittens } from "./kittens";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: kittens,
      searchfield: ""
    };
  }

  onSearchChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList kittens={this.state.kittens} />
      </div>
    );
  }
}

export default App;
