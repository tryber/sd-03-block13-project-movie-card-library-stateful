// implement MovieLibrary component here digite CCS para chamar o snippet
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import React from 'react';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    };

    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.movieFilter = this.movieFilter.bind(this);

  }

  
  addMovie() {
    { this.state.movies.append(this.state); }
  }

  movieFilter(filmes) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return filmes.filter(filme => (filme.title.includes(searchText)
    || filme.subtitle.includes(searchText)
    || filme.storyline.includes(searchText))
    && (filme.genre === selectedGenre || selectedGenre === '')
    && (bookmarkedOnly ? filme.bookmarked === true : true));
  }

  toggleBookmark() {
    const { bookmarkedOnly } = this.state;
    this.setState({bookmarkedOnly: !bookmarkedOnly});
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="application">
        <div className="paneLeft">
          <SearchBar
            searchText={this.state.searchText}
            bookmarkedOnly={this.state.bookmarkedOnly}
            selectedGenre={this.state.selectedGenre}
            onSearchTextChange={(evt) => this.setState({searchText: evt.target.value})}
            onBookmarkedChange={this.toggleBookmark}
            onSelectedGenreChange={(evt) => this.setState({selectedGenre: evt.target.value})}
          />
          <AddMovie onClick={this.AddMovie}/>
        </div>
        <div className="panelRight">
          <MovieList movies={this.movieFilter(movies)} />
        </div>
      </div>
    );
  }
}

export default MovieLibrary;
