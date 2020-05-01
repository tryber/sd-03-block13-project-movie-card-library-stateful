// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
    this.stateUpdateHandler = this.stateUpdateHandler.bind(this);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.moveFilter = this.moveFilter.bind(this);
  }

  bookmarkListener(movie) {
    const { bookmarkedOnly } = this.state;

    if (movie.bookmarked === true || !bookmarkedOnly) return movie;
    return false;
  }

  genreListener(movie) {
    const { selectedGenre } = this.state;

    if (selectedGenre === movie.genre || !selectedGenre) return movie;
    return false;
  }

  moveFilter(movies) {
    const { searchText } = this.state;

    return movies.filter(
      (movie) => (movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
        && this.bookmarkListener(movie)
        && this.genreListener(movie),
    );
  }

  addButtonHandler(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  stateUpdateHandler(event, name) {
    const { value } = event.target;
    const { bookmarkedOnly } = this.state;

    this.setState({ [name]: name === 'bookmarkedOnly' ? !bookmarkedOnly : value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={(event) => this.stateUpdateHandler(event, 'searchText')}
          onBookmarkedChange={(event) => this.stateUpdateHandler(event, 'bookmarkedOnly')}
          onSelectedGenreChange={(event) => this.stateUpdateHandler(event, 'selectedGenre')}
        />
        <MovieList movies={this.moveFilter(this.state.movies)} />
        <AddMovie onClick={this.addButtonHandler} />
      </div>
    );
  }
}

export default MovieLibrary;
