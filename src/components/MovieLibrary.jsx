import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
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

    this.addMovie = this.addMovie.bind(this);
    this.handleOnBookmarkedChange = this.handleOnBookmarkedChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  checkBookmarked(movie) {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly || (bookmarkedOnly && movie.bookmarked === true)) {
      return movie;
    }
    return false;
  }

  checkGenre(movie) {
    const { selectedGenre } = this.state;
    if ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) return movie;
    return false;
  }

  filterMovie(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (movie) => (movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      && this.checkBookmarked(movie)
      && this.checkGenre(movie),
    );
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { searchText, selectedGenre, movies, bookmarkedOnly } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChangeInput}
          onBookmarkedChange={this.handleOnBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChangeInput}
          bookmarkedOnly={bookmarkedOnly}
        />
        <MovieList movies={this.filterMovie(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
