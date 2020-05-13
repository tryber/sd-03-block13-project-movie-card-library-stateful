// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="Text">Inclui o texto</label>
        <input
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <label htmlFor="Text">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        <label htmlFor="Text">Filtrar por gênero</label>
        <select name="Generos" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}
