import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      movies: this.props.movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
    this.handleBmChange = this.handleBmChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  handleBmChange() {
    this.setState({bookmarkedOnly: !this.state.bookmarkedOnly})
  }

  bmCheck (movie) {
    if(this.state.bookmarkedOnly === false || movie.bookmarked === true){ //checar se apenas um check movie.bookmarked === true substitui essa linha
      return movie;
    }
    return false;
  }

  genreCheck(movie) {
    if(!this.state.selectedGenre || 
    (this.state.selectedGenre && this.state.selectedGenre === movie.genre)){
      return movie;
    }
    return false;
  }

  textCheck(movie) {
    if(movie.title.includes(this.state.searchText) ||
    movie.subtitle.includes(this.state.searchText) ||
    movie.storyline.includes(this.state.searchText)){
      return movie;
    }
    return false;
  }

  movieFilter(movies) {
    const filtered = movies.filter(movie =>
      this.bmCheck(movie) && this.genreCheck(movie) && this.textCheck(movie)
    )
    return filtered;
  }

  render () {
    return (
      <div>
        <SearchBar 
        searchText={this.state.searchText}
        onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.handleBmChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={this.movieFilter(this.state.movies)} />
      </div>
    )
  }
}

export default MovieLibrary;