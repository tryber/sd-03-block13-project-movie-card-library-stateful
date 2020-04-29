import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.handleOnBookmarkedChange = this.handleOnBookmarkedChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movie) {
    this.setState(state => ({ movies: [...state.movies, movie] }));
  }

  handleChangeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleOnBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  filterMovie(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    const checkBookmarked = (movie) => {
      if ((!bookmarkedOnly) || (bookmarkedOnly && movie.bookmarked === true)) {
        return movie;
      }
      return false;
    };

    const checkGenre = (movie) => {
      if ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) return movie;
      return false;
    };

    return movies.filter(movie => (movie.title.toLowerCase()
      .includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      && checkBookmarked(movie) && checkGenre(movie));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChangeInput}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleOnBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChangeInput}
        />
        <MovieList movies={this.filterMovie(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
