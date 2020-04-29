import React, { Component } from 'react';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    }
  }
  render() {
    return (
      <h1>hello</h1>
    );
  }
}
