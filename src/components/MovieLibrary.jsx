// implement MovieLibrary component here digite CCS para chamar o snippet
import React from 'react';
import AddMovie from './AddMovie';
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
      movies,
    };

    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  
  // Insere novo filme na grade. O parâmetro filme vem da função chamada em AddMovie.
  // A sintaxe com spread abaixo é usada no lugar de outra como
  // ...{movies: this.state.movies.concat(filme)} pois é mais eficiente.
  addMovie(filme) {
    { this.setState({ movies: [...this.state.movies, filme] })};
  }

  // Faz o filtro dos posteres a serem exibidos na página confomrme o filtro aplicado
  movieFilter(filmes) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return filmes.filter((filme) => (filme.title.includes(searchText)
    || filme.subtitle.includes(searchText)
    || filme.storyline.includes(searchText))
    && (filme.genre === selectedGenre || selectedGenre === '')
    && (bookmarkedOnly ? filme.bookmarked === true : true));
  }

  toggleBookmark() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  render() {
    return (
      <div className="application">
        <div className="paneLeft">
          <SearchBar
            searchText={this.state.searchText}
            bookmarkedOnly={this.state.bookmarkedOnly}
            selectedGenre={this.state.selectedGenre}
            onSearchTextChange={(evt) => this.setState({ searchText: evt.target.value })}
            onBookmarkedChange={this.toggleBookmark}
            onSelectedGenreChange={(evt) => this.setState({ selectedGenre: evt.target.value })}
          />
          <AddMovie onClick={this.addMovie} />
        </div>
        <div className="panelRight">
          <MovieList movies={this.movieFilter(this.state.movies)} />
        </div>
      </div>
    );
  }
}

export default MovieLibrary;
