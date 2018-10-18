import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { setSearchField } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

// any component that owns state uses class syntax so they can use constructor function to create
// this.state
class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: []
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

  render() {
    const { kittens } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredKittens = kittens.filter(kitten => {
      return kitten.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (kittens.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Kitty Friends</h1>
          <SearchBox searchChange={onSearchChange} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
