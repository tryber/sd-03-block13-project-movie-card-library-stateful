// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'action',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const input = event.target;
    this.setState({ searchText: input.value });
  }

  onBookmarkedChange(event) {
    const input = event.target;
    this.setState({ bookmarkedOnly: input.value });
  }

  onSelectedGenreChange(event) {
    const input = event.target;
    this.setState({ selectedGenre: input.value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}
