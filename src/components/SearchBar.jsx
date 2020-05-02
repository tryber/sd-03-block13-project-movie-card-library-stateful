import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form className="form">
        <label htmlFor="text">
          Inclui o texto:&nbsp;
          <input onChange={onSearchTextChange} value={searchText} type="text" />
        </label>
        <label htmlFor="checkbox">
          <input checked={bookmarkedOnly} onChange={onBookmarkedChange} type="checkbox" />
          &nbsp;Mostrar somente favoritos
        </label>
        <label htmlFor="Genero">
          Filtrar por gênero&nbsp;
          <select id="Genero" value={selectedGenre} onChange={onSelectedGenreChange}>
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
export default SearchBar;
