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
    };
  }

  insertSearch(value) {
    this.setState((state) => ({ searchText: `${state.searchText}${value}` }));
  }

  changeBookMark() {
    this.setState({ bookmarkedOnly: true });
  }

  selectGenre(value) {
    this.setState({ selectedGenre: value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={() => this.insertSearch()}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={() => this.changeBookMark()}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={() => this.selectGenre()}
        />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
