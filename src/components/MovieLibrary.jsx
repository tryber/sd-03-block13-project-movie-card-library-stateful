
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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

    this.changeHandler = this.changeHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  filterByBookmark(movie) {
    const { bookmarkedOnly } = this.state;

    if (movie.bookmarked === true || !bookmarkedOnly) return movie;
    return false;
  }

  filterByGenre(movie) {
    const { selectedGenre } = this.state;

    if (selectedGenre === movie.genre || !selectedGenre) return movie;
    return false;
  }

  movieFilter(movies) {
    const { searchText } = this.state;

    return movies.filter(
      (movie) => ((movie.title.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))
      || (movie.storyline.toLowerCase().includes(searchText.toLowerCase())))
      && this.filterByBookmark(movie)
      && this.filterByGenre(movie),
    );
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  changeHandler(event, stateElem) {
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
          onBookmarkedChange={(event) => this.changeHandler(event, 'bookmarkedOnly')}
          onSearchTextChange={(event) => this.changeHandler(event, 'searchText')}
          onSelectedGenreChange={(event) => this.changeHandler(event, 'selectedGenre')}
          searchText={searchText}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={this.movieFilter(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
