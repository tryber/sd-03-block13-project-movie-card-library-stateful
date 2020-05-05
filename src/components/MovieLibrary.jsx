// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

const filtroMovies = (text, selectedGenre, saved, film) => {
  const { title, subtitle, storyline, genre, bookmarked } = film;
  return (title.includes(text) || subtitle.includes(text) || storyline.includes(text)) &&
    (selectedGenre === '' ? true : genre === selectedGenre) &&
    (saved ? bookmarked : true);
};

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.addFilme = this.addFilme.bind(this);
  }

  onSearchChange(e) {
    this.setState({
      searchText: e.target.value,
      bookmarkedOnly: true,
      selectedGenre: e.target.value,
    });
  }

  addFilme(novoFilme) {
    this.setState((filme) => ({ movies: [...filme.movies, novoFilme] }));
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    return (
      <div>
        <SearchBar
          onSelectedGenreChange={this.onSearchChange}
          selectedGenre={selectedGenre}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onSearchChange}
          onSearchTextChange={this.onSearchChange}
          searchText={searchText}
        />
        <MovieList
          movies={movies.filter((film) =>
            filtroMovies(searchText, selectedGenre, bookmarkedOnly, film))}
        />
        <AddMovie onClick={this.addFilme} />
      </div>
    );
  }
}

export default MovieLibrary;
