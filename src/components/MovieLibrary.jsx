import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, stateElem) {
    const { value } = event.target;
    const { bookmarkedOnly } = this.state;

    this.setState({ [stateElem]: (stateElem === 'bookmarkedOnly' ? !bookmarkedOnly : value) });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.handleChange(event, 'bookmarkedOnly')}
          onSearchTextChange={(event) => this.handleChange(event, 'searchText')}
          onSelectedGenreChange={(event) => this.handleChange(event, 'selectedGenre')}
          searchText={searchText}
          selectedGenre={selectedGenre}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;