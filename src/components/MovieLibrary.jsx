// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList.jsx';
import MovieData from '../data';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export class MovieLibrary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchText: '',
       bookmarkedOnly: false,
       selectedGenre: '',
       movies: this.props.movies,
    }
    this.onSearchTextChange = this.onSearchTextChange.bind(this)
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this)
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this)
  }

  onSearchTextChange({ target }) { 
    this.setState({ searchText: target.value }); 
  }

  onBookmarkedChange({ target }) { 
    this.setState({ bookmarkedOnly: target.checked }); 
  }

  onSelectedGenreChange({ target }) { 
    this.setState({ selectedGenre: target.value }); 
  }
  
  render() {

    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText} onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange} bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={MovieData}/>
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
