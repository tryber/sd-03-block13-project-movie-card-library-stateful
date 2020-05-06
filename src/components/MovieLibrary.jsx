import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.callBack = this.callBack.bind(this);
    this.filtroarr = this.filtroarr.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  callBack(e) {
    this.setState({
      searchText: e.target.value,
      bookmarkedOnly: true,
      selectedGenre: e.target.value,
    });
  }

  filtroarr() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = [...movies];
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((e) => e.bookmarked);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((e) => e.genre === selectedGenre);
    }
    if (searchText) {
      filteredMovies = filteredMovies.filter((e) => e.title.includes(searchText)
        || e.subtitle.includes(searchText) || e.storyline.includes(searchText));
    }

    return filteredMovies;
  }

  addMovie(e) {
    this.setState((prevState) => ({ movies: [...prevState.movies, e] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.callBack}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.callBack}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.callBack}
        />
        <MovieList movies={this.filtroarr()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
