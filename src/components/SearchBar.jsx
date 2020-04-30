import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
  // const { searchText, onSearchTextChange, bookmarkedOnly,
  // onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        <label htmlFor="a">Inclui o texto:</label>
        <input type="text" name="a" value="" onChange="" />

        <label htmlFor="checkbox">Mostrar Somente os Favoritos</label>
        <input type="checkbox" name="checkbox" checked="" value="" onChange="" />

        <label>Filtar por gênero</label>
        <select value="" onChange="">
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}


export default SearchBar;
