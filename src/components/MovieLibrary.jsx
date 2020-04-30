// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  FiltrarMovies() {
    let movieFiltrado = [...this.state.movies];
    if (this.state.searchText) {
      movieFiltrado = movieFiltrado.filter((movie) => movie.title.includes(this.state.searchText)
        || movie.subtitle.includes(this.state.searchText)
        || movie.storyline.includes(this.state.searchText));
    }
    if (this.state.bookmarkedOnly) {
      movieFiltrado = movieFiltrado.filter((movie) => movie.bookmarked);
    }
    if (this.state.selectedGenre) {
      movieFiltrado = movieFiltrado.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return movieFiltrado;
  }
  addMovie(newState) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newState] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={selectedGenre}
        />

        <MovieList movies={this.FiltrarMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
