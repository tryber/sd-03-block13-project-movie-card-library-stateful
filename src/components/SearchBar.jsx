// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="texto">Inclui o texto:</label><input type="text" value={searchText} name="texto" onChange={onSearchTextChange} />

          <label htmlFor="favoritos">Mostrar somente favoritos:</label><input type="checkbox" name="favoritos" checked={bookmarkedOnly} onChange={onBookmarkedChange} />

          <label htmlFor="genero">Filtrar por gênero:</label>
          <select value={selectedGenre} name="genero" onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
