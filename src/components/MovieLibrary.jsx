import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function byMatching(searchText, film) {
  film.title.includes(searchText) ||
  film.subtitle.includes(searchText) ||
  film.storyline.includes(searchText)
}

function byGenre(genre, film) { return genre === '' ? true : film.genre === genre }

function bySaved(saved, film) { return saved ? film.bookmarked : true } 

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
      <div>
        <SearchBar
          searchText={searchText} onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={saved} onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={genre} onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies.filter((film) =>
            byMatching(searchText, film) && byGenre(genre, film) && bySaved(saved, film))
          }
        />
        <AddMovie onClick={this.handleAddMovieClick} />
      </div>
    );
  }
}
