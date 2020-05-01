// implement MovieLibrary component here
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
    this.handleChange = this.handleChange.bind(this);
    this.handleBookMark = this.handleBookMark.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeMovies = this.changeMovies.bind(this);
  }

  handleChange(value, name) {
    const change = { [name]: value };
    this.setState(() => (change));
  }

  handleBookMark(event) {
    const value = event.target.checked;
    this.setState(() => ({ bookmarkedOnly: value }));
  }

  handleClick(form) {
    this.setState((state) => ({ movies: [...state.movies, form] }));
  }

  changeMovies() {
    const { movies } = this.state;
    return this.SearchTextResult(this.selectByFavorites(this.selectByGenre(movies)));
  }

  selectByGenre(mov) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return mov.filter((e) => e.genre === selectedGenre);
    }
    return mov;
  }

  selectByFavorites(mov) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly !== false) {
      return mov.filter((e) => e.bookmarked === true);
    }
    return mov;
  }

  SearchTextResult(mov) {
    const { searchText } = this.state;
    if (searchText !== '') {
      return mov.filter((e) => e.title.toLowerCase().includes(searchText.toLowerCase())
      || e.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || e.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return mov;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={(e) => { this.handleChange(e.target.value, 'searchText'); }}
          onSelectedGenreChange={(e) => { this.handleChange(e.target.value, 'selectedGenre'); }}
          onBookmarkedChange={this.handleBookMark}
        />
        <MovieList movies={this.changeMovies()} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}

export default MovieLibrary;
