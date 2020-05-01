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
    }
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      const { selectedGenre } = this.state;
      const { movies } = this.props;
      this.setState({ movies: movies }, () => {
        if (selectedGenre !== '') {
          const moviesFilter = movies.filter(item => item.genre === selectedGenre);
          this.setState({ movies: moviesFilter });
        } else {
          this.setState({ movies: movies });
        }
      });
    });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, () => {
      const { searchText } = this.state;
      const { movies } = this.props;
      this.setState( { movies: movies }, () => {
        if (searchText !== '') {
          const moviesFilter = movies.filter(item => 
          item.title.includes(searchText) || item.subtitle.includes(searchText) ||
          item.storyline.includes(searchText));
          this.setState({ movies: moviesFilter });
        } else {
          this.setState({ movies: movies });
        }
      });
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
        <AddMovie />

      </div>
    )
  }
}

export default MovieLibrary;
