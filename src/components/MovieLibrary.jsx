// implement MovieLibrary component here
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
    const movies1 = [...movies];
    return this.changeSearchText(this.changeFav(this.changeGenre(movies1)));
  }

  changeGenre(mov) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return mov.filter((e) => e.genre === selectedGenre);
    }
    return mov;
  }

  changeFav(mov) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly !== false) {
      return mov.filter((e) => e.bookmarked === true);
    }
    return mov;
  }

  changeSearchText(mov) {
    const { searchText } = this.state;
    if (searchText !== '') {
      return mov.filter((e) => e.title.toLowerCase().includes(searchText.toLowerCase())
      || e.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || e.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return mov;
  }

  handleClick(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] });
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

export default MovieLibrary;
