import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { kittens } from "./kittens";

// any component that owns state uses class syntax so they can use constructor function to create
// this.state
class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: kittens,
      searchfield: ""
    };
  }

  // Use arrow functions when ever you make your own methods so that this is used correctly
  // according to where it was created
  onSearchChange = event => {
    // when ever you want to update state use setState
    this.setState({ searchfield: event.target.value });
    // filters kittens base on what is entered in the searchbox
  };

  render() {
    const filteredKittens = this.state.kittens.filter(kitten => {
      return kitten.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList kittens={filteredKittens} />
      </div>
    );
  }
}

export default App;
