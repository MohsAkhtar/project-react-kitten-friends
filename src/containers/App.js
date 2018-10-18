import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { setSearchField, requestKittens } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchKittens.searchField,
    kittens: state.requestKittens.kittens,
    isPending: state.requestKittens.isPending,
    error: state.requestKittens.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestKittens: () => dispatch(requestKittens())
  };
};

// any component that owns state uses class syntax so they can use constructor function to create
// this.state
class App extends Component {
  // on mounting we update kittens array by fetching data from jsonplaceholder api
  componentDidMount() {
    this.props.onRequestKittens();
  }

  render() {
    const { searchField, onSearchChange, kittens, isPending } = this.props;

    const filteredKittens = kittens.filter(kitten => {
      return kitten.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
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
