// implement MovieLibrary component here digite CCS para chamar o snippet
import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import movies from "../data";
import AddMovie from "./AddMovie";

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = { 
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: this.props
      };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

  }

  onSearchTextChange(event) {
    this.setState({searchText: event.target.value})
  }

  onBookmarkedChange(event) {
    this.setState({bookmarkedOnly: event.target.value})
  }

  onSelectedGenreChange(event) {
    this.setState({selectedGenre: event.target.value})
  }


  render() {
    return (
      <div>
        <SearchBar
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;