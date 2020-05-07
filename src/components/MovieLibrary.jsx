// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        searchText:'',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: this.props.movies,
    };
    this.onClick = this.onClick.bind(this);
}

  onChange(event, key) {
    this.setState({ [key]: (key === 'bookmarkedOnly' ? event.target.checked : event.target.value) });
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
          onSearchTextChange={(event) => this.onChange(event, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.onChange(event, 'bookmarkedOnly')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.onChange(event, 'selectedGenre')}
        />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
