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
  }

  onCliclAddMovie(filme) {
    const { movies } = this.state;
    movies.push(filme);
    this.setState({ movies });
    console.log(movies)
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      const { selectedGenre } = this.state;
      const { movies } = this.props;
      if (selectedGenre !== '') {
        const moviesFilter = movies.filter((item) => item.genre === selectedGenre);
        this.setState({ movies: moviesFilter });
      } else {
        this.setState({ movies });
      }
    });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, () => {
      const { searchText } = this.state;
      const { movies } = this.props;
      if (searchText !== '') {
        const moviesFilter = movies.filter((item) =>
          item.title.includes(searchText) || item.subtitle.includes(searchText) ||
          item.storyline.includes(searchText));
        this.setState({ movies: moviesFilter });
      } else {
        this.setState({ movies });
      }
    });
  }

  onBookmarkedChange(event) {
    console.log(this.state.bookmarkedOnly)
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      event.target.value = !event.target.value;
    }
    this.setState({ bookmarkedOnly: !!event.target.value }, () => {
      
      const { movies } = this.props;
      if (bookmarkedOnly === true) {
        const movieFilterMarked = movies.filter((item) => item.bookmarked === true);
        this.setState({ movies: movieFilterMarked });
      } else {
        this.setState({ movies });
      }
    });
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onCliclAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
