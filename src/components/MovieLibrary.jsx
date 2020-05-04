import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    // this.fMovie = this.fMovie.bind(this);
    // this.hBookChange = this.hBookChange.bind(this);
    // this.iMovie = this.iMovie.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  // fMovie() {
  //   const { movies } = this.state;
  //   const moviesA = [...movies];
  //   return this.changeSearchText(this.changeFav(this.changeGenre(moviesA)));

  //   // return movies.filter(
  //   //   (movie) => (movie.title.includes(movie) || movie.subtitle.includes(movie)
  //   //   || movie.storyline.includes(movie))
  //   //   && this.cMarked(movie) && this.vGenre(movie),
  //   // );
  // }

  // changeGenre(event) {
  //   this.setState({ selectedGenre: event.target.value });
  // }

  // changeSearchText(mov) {
  //   const { searchText } = this.state;
  //   if (searchText !== '') {
  //     return mov.filter((e) => e.title.toLowerCase().includes(searchText.toLowerCase())
  //     || e.subtitle.toLowerCase().includes(searchText.toLowerCase())
  //     || e.storyline.toLowerCase().includes(searchText.toLowerCase()));
  //   }
  //   return mov;
  // }

  // hBookChange() {
  //   const { bookmarkedOnly } = this.state;
  //   this.setState({ bookmarkedOnly: !bookmarkedOnly });
  // }

  // iMovie(movie) {
  //   // const { movies } = this.state;
  //   this.setState((state) => ({ movies: [...state.movies, movie] }));
  // }

  // changeFav(mov) {
  //   const { bookmarkedOnly } = this.state;
  //   if (bookmarkedOnly !== false) {
  //     return mov.filter((e) => e.bookmarked === true);
  //   }
  //   return mov;
  // }

  // vGenre(movie) {
  //   const { selectedGenre } = this.state;
  //   if ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) return movie;
  //   return false;
  // }

  // changeGenre(mov) {
  //   const { selectedGenre } = this.state;
  //   if (selectedGenre !== '') {
  //     return mov.filter((e) => e.genre === selectedGenre);
  //   }
  //   return mov;
  // }

  // cMarked(movie) {
  //   const { bookmarkedOnly } = this.state;
  //   if (!bookmarkedOnly || (bookmarkedOnly && movie.bookmarked === true)) {
  //     return movie;
  //   }
  //   return false;
  // }

  handleChangeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  handleChangeText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleChangeCheckbox(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  changeMovies() {
    const { movies } = this.state;
    const movies1 = [...movies];
    return this.changeSearchText(this.changeFav(this.changeGenre(movies1)));
  }

  changeGenre(movie) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return movie.filter((e) => e.genre === selectedGenre);
    }
    return movie;
  }

  changeFav(movie) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly !== false) {
      return movie.filter((e) => e.bookmarked === true);
    }
    return movie;
  }

  changeSearchText(movie) {
    const { searchText } = this.state;
    if (searchText !== '') {
      return movie.filter((e) => e.title.toLowerCase().includes(searchText.toLowerCase())
      || e.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || e.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return movie;
  }

  handleClick(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          // bookmarkedOnly={bookmarkedOnly}
          // selectedGenre={selectedGenre}
          // onSelectedGenreChange={this.onSearchChange}
          // onBookmarkedChange={this.onSearchChange}
          // onSearchTextChange={this.onSearchChange}
          onSearchTextChange={this.handleChangeText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChangeCheckbox}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChangeGenre}
        />
        <MovieList movies={this.changeMovies()} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}
