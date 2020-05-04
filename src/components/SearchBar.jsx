import React from 'react';

export default class SearchBar extends React.Component {
  includesText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText">
        Inclui o texto
        <input
          type="text"
          name="searchText"
          id="searchText"
          onChange={onSearchTextChange}
          value={searchText}
        />
      </label>
    );
  }

  favoriteOnly() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label htmlFor="favoritos">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="favoritos"
          onChange={onBookmarkedChange}
          checked={bookmarkedOnly}
        />
      </label>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {this.includesText()}
        {this.favoriteOnly()}
        <label htmlFor="select">
          Filtrar por gênero
          <select
            id="select"
            name="selectedGenre"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
