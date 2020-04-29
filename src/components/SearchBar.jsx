// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const arraySelect = ['Todos', 'Ação', 'Comédia', 'Suspense'];
    const arrayVal = ['', 'action', 'comedy', 'thriller'];
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="IncluiOTexto">
          Inclui o texto:
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              id="IncluiOTexto"
            />
          </label>
          <label htmlFor="MostrarSomenteFavoritos">
          Mostrar somente favoritos
            <input
              type="checkbox"
              value={bookmarkedOnly}
              onChange={onBookmarkedChange}
              id="MostrarSomenteFavoritos"
            />
          </label>
          <label htmlFor="FiltrarPorGen">
          Filtrar por gênero
            <select
              value={selectedGenre}
              onChange={onSelectedGenreChange}
              id="FiltrarPorGen"
            >
              {arraySelect.map((el, index) => (
                <option value={
                arrayVal[index]
              }
                >
                  {el}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
