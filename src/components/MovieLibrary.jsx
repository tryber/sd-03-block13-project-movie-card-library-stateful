import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  insertSearch (event) {
    this.setState({ searchText: event.target.value });
  }

  changeBookMark (event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  selectGenre (event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.insertSearch}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookMark}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.selectGenre}
        />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
