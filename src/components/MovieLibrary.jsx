import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, key) {
    this.setState({ [key]: (key === 'bookmarkedOnly' ? event.target.checked : event.target.value) });
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  movieFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtredMovies = [...movies];
    if (searchText) {
      filtredMovies = filtredMovies.filter(
        (movie) =>
          movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText),
      );
    }
    if (bookmarkedOnly) {
      filtredMovies = filtredMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      filtredMovies = filtredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filtredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>Encontre um filme</h2>
        <SearchBar
          searchText={searchText}
          onSearckTextChange={(event) => this.handleOnChange(event, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.handleOnChange(event, 'bookmarkedOnly')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.handleOnChange(event, 'selectedGenre')}
        />
        <MovieList movies={this.movieFilter()} />
        <h2>Adicione um novo filme a lista</h2>
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
