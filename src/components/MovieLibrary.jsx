import React from 'react';

class MovieLibrary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    };
  }
}

export default MovieLibrary;