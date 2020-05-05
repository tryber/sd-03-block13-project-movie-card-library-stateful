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
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onCliclAddMovie = this.onCliclAddMovie.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  onCliclAddMovie(filme) {
    const { movies } = this.state;
    movies.push(filme);
    this.setState({ movies });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  filter() {
    let filters;
    const { selectedGenre, bookmarkedOnly, searchText } = this.state;
    const { movies } = this.props;
    if (selectedGenre !== '') {
      filters = movies.filter((item) => item.genre === selectedGenre);
    } else {
      filters = movies;
    }
    if (bookmarkedOnly === true) {
      filters = filters.filter((item => item.bookmarked === true))
    }
    if (searchText !== '') {
      filters = filters.filter((item) =>
        item.title.includes(searchText) || item.subtitle.includes(searchText) ||
        item.storyline.includes(searchText));
    }
    return filters;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filter()} />
        <AddMovie onClick={this.onCliclAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
