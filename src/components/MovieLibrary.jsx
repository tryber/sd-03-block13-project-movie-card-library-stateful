// implement MovieLibrary component here
import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={this.props} />
        <h1>teste</h1>
      </div>
    );
  }
}