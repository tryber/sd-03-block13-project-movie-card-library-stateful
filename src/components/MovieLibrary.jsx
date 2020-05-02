import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onFilterMovies(movie) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movie.filter(({ genre }) =>
      selectedGenre === '' ? true : genre === selectedGenre)
      .filter((favorite) => bookmarkedOnly === true ? favorite.bookmarked : true)
      .filter((text) => text.title.includes(searchText)
        || text.subtitle.includes(searchText) || text.storyline.includes(searchText));
  }

  newMovies() {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this;
    const resultMovies = this.onFilterMovies(this.state.movies);
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
        <MovieList movies={resultMovies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
