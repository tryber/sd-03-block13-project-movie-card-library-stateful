import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  handleChangeText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleChangeCheckbox(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  changeMovies() {
    const { movies } = this.state;
    const movieA = [...movies];
    return this.changeSearchText(this.changeFavorite(this.changeGenre(movieA)));
  }

  changeGenre(movie) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return movie.filter((e) => e.genre === selectedGenre);
    }
    return movie;
  }

  changeFavorite(movie) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly !== false) {
      return movie.filter((e) => e.bookmarked === true);
    }
    return movie;
  }

  changeSearchText(movie) {
    const { searchText } = this.state;
    if (searchText !== '') {
      return movie.filter((e) => e.title.toLowerCase().includes(searchText.toLowerCase())
      || e.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || e.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return movie;
  }

  handleClick(object) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, object] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChangeText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChangeCheckbox}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChangeGenre}
        />
        <MovieList movies={this.changeMovies()} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}
