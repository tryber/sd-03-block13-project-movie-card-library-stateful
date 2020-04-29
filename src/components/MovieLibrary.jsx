import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
  }

  handleAddMovieClick = newMovie =>
    this.setState(state => ({ movies: [...state.movies, newMovie] }));

  onSearchTextChange = ({ target }) => this.setState({ searchText: target.value });

  onBookmarkedChange = ({ target }) => this.setState({ bookmarkedOnly: target.checked });

  onSelectedGenreChange = ({ target }) => this.setState({ selectedGenre: target.value });

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText} onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList
          movies=
          {movies
            .filter(film =>
              film.title.includes(searchText) ||
              film.subtitle.includes(searchText) ||
              film.storyline.includes(searchText))
            .filter(film => selectedGenre === '' ? true : film.genre === selectedGenre)
            .filter(film => bookmarkedOnly === false ? true : film.bookmarked)
          }
        />
        <AddMovie onClick={this.handleAddMovieClick} />
      </div>
    );
  }
}
