import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

// any component that owns state uses class syntax so they can use constructor function to create
// this.state
class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      searchfield: ""
    };
  }

  // on mounting we update kittens array by fetching data from jsonplaceholder api
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ kittens: users });
      });
  }

  // Use arrow functions when ever you make your own methods so that this is used correctly
  // according to where it was created
  onSearchChange = event => {
    // when ever you want to update state use setState
    this.setState({ searchfield: event.target.value });
    // filters kittens base on what is entered in the searchbox
  };

  render() {
    const { kittens, searchfield } = this.state;
    const filteredKittens = kittens.filter(kitten => {
      return kitten.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (kittens.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Kitty Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList kittens={filteredKittens} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
