import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  handleChangeInput(event, stateElemet) {
    const { value } = event.target;
    const { bookmarkedOnly } = this.state;

    this.setState({ [stateElemet]: (stateElemet === 'bookmarkedOnly' ? !bookmarkedOnly : value) });
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

  filterMovie(movies) {
    const { searchText } = this.state;

    return movies.filter(
      (movie) => ((movie.title.toLowerCase().includes(searchText.toLowerCase()))
        || (movie.subtitle.toLocaleLowerCase().includes(searchText.toLowerCase()))
        || (movie.storyline.toLocaleLowerCase().includes(searchText.toLowerCase())))
        && this.filterBookmark(movie)
        && this.filterGenre(movie),
    );
  }

  addMovie(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.handleChangeInput(event, 'bookmarkedOnly')}
          onSearchTextChange={(event) => this.handleChangeInput(event, 'searchText')}
          onSelectedGenreChange={(event) => this.handleChangeInput(event, 'selectedGenre')}
          searchText={searchText}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={this.filterMovie(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
