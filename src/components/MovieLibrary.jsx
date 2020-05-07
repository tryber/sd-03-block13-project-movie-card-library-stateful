import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  filterBookmark(movie) {
    const { bookmarkedOnly } = this.state;

    if (movie.bookmarked === true || !bookmarkedOnly) return movie;
    return false;
  }

  filterGenre(movie) {
    const { selectedGenre } = this.state;

    if (selectedGenre === movie.genre || !selectedGenre) return movie;
    return false;
  }

  filterMovies(movies) {
    const { searchText } = this.state;

    return movies.filter(
      (movie) => ((movie.title.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.storyline.toLowerCase().includes(searchText.toLowerCase())))
      && this.filterBookmark(movie)
      && this.filterGenre(movie),
    );
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  handleChange(event, stateElem) {
    const { value } = event.target;
    const { bookmarkedOnly } = this.state;

    this.setState({ [stateElem]: (stateElem === 'bookmarkedOnly' ? !bookmarkedOnly : value) });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.handleChange(event, 'bookmarkedOnly')}
          onSearchTextChange={(event) => this.handleChange(event, 'searchText')}
          onSelectedGenreChange={(event) => this.handleChange(event, 'selectedGenre')}
          searchText={searchText}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={this.filterMovies(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
