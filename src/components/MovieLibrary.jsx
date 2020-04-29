// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMove from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterIt = this.filterIt.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        if (obj[key] !== null) {
          const tempKey = obj[key].toString().toLowerCase();
          const tempSearch = searchKey.toLowerCase();
          return tempKey.includes(tempSearch) &&
          tempKey.includes(this.state.selectedGenre)
          
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
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={this.state.selectedGenre}
        />
        
        <MovieList movies={this.filterIt(this.state.movies,this.state.searchText)} />
        <AddMove />
      </div>
    );
  }
}

export default MovieLibrary;
