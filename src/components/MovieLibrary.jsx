import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

// import { Container } from './styles';

export default class components extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}
