// implement SearchBar component here
import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <fieldset>
        <label htmlFor="searchText">
          Inclui o texto:
          <input value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="bookMarker">
          Mostrar somente favoritos
          <input
            name="bookMarker"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          Filtrar por gênero
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </fieldset>
    );
  }
}

export default SearchBar;
