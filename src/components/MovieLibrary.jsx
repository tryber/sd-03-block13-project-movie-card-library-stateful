import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.changeText = this.changeText.bind(this);
    this.changeBookMarked = this.changeBookMarked.bind(this);
    this.changeSelectedGenre = this.changeSelectedGenre.bind(this);
  }
  changeText(event) {
    const inputText = event.target;
    this.setState({ searchText: inputText.value });
  }
  changeBookMarked(event) {
    const inputBookMarked = event.target;
    this.setState({ bookmarkedOnly: inputBookMarked.checked });
  }
  changeSelectedGenre(event) {
    const inputGenre = event.target;
    this.setState({ selectedGenre: inputGenre.value });
  }
  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookMarked}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeSelectedGenre}
        />
        <MovieList movies={movies} />
      </section>
    );
  }
}

export default MovieLibrary;
