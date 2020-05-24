import React, { Component } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
    this.onClick = this.onClick.bind(this);
  }

  onChange(e, key) {
    this.setState({ [key]: (key === 'bookmarkedOnly') ? e.target.checked : e.target.value });
  }

  moviesFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filterMovies = [...movies];

    if(bookmarkedOnly) {
      filterMovies = filterMovies.filter(movie => movie.bookmarked === true)
    } else if(selectedGenre) {
      filterMovies = filterMovies.filter(movie => movie.genre === selectedGenre)
    } else if (searchText) {
      filterMovies = filterMovies.filter(movie => 
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText) )
    }
    return filterMovies;
  }

  onClick(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.onChange(e, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(e) => this.onChange(e, 'bookmarkedOnly')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.onChange(e, 'selectedGenre')}
        />
        <MovieList movies={this.moviesFilter()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}
export default MovieLibrary;
