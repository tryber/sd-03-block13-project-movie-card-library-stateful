import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="text"> Incluir o texto
            <input type="text" />
          </label>
          <label htmlFor="check"> Mostrar somente favoritos
            <input type="checkbox" />
          </label>
          <label htmlFor="genger"> Filtrar por genero
            <select id="genger"></select>
          </label>
        </form>
      </div>
    );
  }
}
export default SearchBar;
