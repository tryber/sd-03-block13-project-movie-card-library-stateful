import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

import './MovieLibrary.css';

function by(text, selectedGenre, saved, film) {
  const { title, subtitle, storyline, genre, bookmarked } = film;
  return (title.includes(text) || subtitle.includes(text) || storyline.includes(text)) &&
  (selectedGenre === '' ? true : genre === selectedGenre) &&
  (saved ? bookmarked : true);
}

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
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) { this.setState({ searchText: target.value }); }

  onBookmarkedChange({ target }) { this.setState({ bookmarkedOnly: target.checked }); }

  onSelectedGenreChange({ target }) { this.setState({ selectedGenre: target.value }); }

  handleAddMovieClick(newMovie) {
    this.setState((s) => ({ movies: [...s.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly: saved, selectedGenre: genre, movies } = this.state;
    return (
      <div className={'library'}>
        <div className={'forms-completo'}>
          <SearchBar
            searchText={searchText} onSearchTextChange={this.onSearchTextChange}
            bookmarkedOnly={saved} onBookmarkedChange={this.onBookmarkedChange}
            selectedGenre={genre} onSelectedGenreChange={this.onSelectedGenreChange}
          />
          <AddMovie onClick={this.handleAddMovieClick} />
        </div>
        <MovieList movies={movies.filter((film) => by(searchText, genre, saved, film))} />
      </div>
    );
  }
}
