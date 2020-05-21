// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onSearchTextChange(event) {
    const input = event.target;
    this.setState({ searchText: input.value });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: true });
  }

  onSelectedGenreChange(event) {
    const input = event.target;
    this.setState({ selectedGenre: input.value });
  }

  handleClick(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] });
  }

  changeMovies() {
    const { movies } = this.state
    const allMovies = [...movies]
    return this.filteredMovies(this.changeFavorite(this.changeGenre(allMovies)))
  }

  changeGenre(mov) {
    const { selectedGenre } = this.state
    if (selectedGenre !== '') {
      return mov.filter((element) => element.genre === selectedGenre)
    }
    return mov;
  }

  changeFavorite(mov) {
    const { bookmarkedOnly } = this.state
    if (bookmarkedOnly !== false) {
      return mov.filter((element => element.bookmarked === true))
    }
    return mov
  }

  filteredMovies(mov) {
    const { searchText } = this.state
    if (searchText !== '') {
      return mov.filter(element => 
          element.title.includes(searchText) || 
          element.subtitle.includes(searchText) ||
          element.storyline.includes(searchText)
      ) 
    }
    return mov;
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
        <MovieList movies={this.changeMovies()} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}
