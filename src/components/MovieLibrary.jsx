// implement MovieLibrary component here
import React, { Component } from "react";

import originalMovies from "../data";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: originalMovies,
    };
  }
  onSearchTextChange = (event) => {
    const text = event.target.value;
    const filtered = originalMovies.filter((movie) => {
      return Object.values(movie).some((detail) => {
        console.log(detail);
        if (typeof detail === "string")
          return detail.toLowerCase().includes(text.toLowerCase());
      });
    });
    this.setState({
      searchText: text,
      movies: filtered,
    });
  };
  onBookmarkedOnly = () => {
    this.setState((state) => ({
      bookmarkedOnly: !state.bookmarkedOnly,
    }));
    const filtered = (state) => {
      if (state.bookmarkedOnly) {
        console.log("insideFilter ", state.bookmarkedOnly);
        console.log(state.movies.filter((movie) => movie.bookmarked === true));
        return state.movies.filter((movie) => movie.bookmarked === true);
      } else {
        return state.movies;
      }
    };

    console.log("prevState", this.state.bookmarkedOnly);
    return this.setState((state) => {
      movies: filtered(state);
    });
  };
  onSelectedGenre = (event) => {
    const value = event.target.value;
    this.setState((state) => ({
      selectedGenre: value,
      movies: state.movies.filter((movie) => movie.genre === value),
    }));
    return value;
  };
  onClick = (callback) => {
    alert(Object.values(callback));
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
