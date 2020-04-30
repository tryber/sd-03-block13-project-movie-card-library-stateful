// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText"><span>Inclui o texto:</span></label>
        <input
          type="text" name="searchBarText" value={searchText} id="searchText"
          onChange={onSearchTextChange}
        />
        <label htmlFor="checkbox"><span>Mostrar somente favoritos</span></label>
        <input
          type="checkbox" name="searchBarCheckbox" id="checkbox"
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <label htmlFor="gender"><span>Filtrar por gênero</span></label>
        <select value={selectedGenre} id="gender" onChange={onSelectedGenreChange}>
          <option key="" value="">Todos</option>
          <option key="action" value="action">Ação</option>
          <option key="comedy" value="comedy">Comédia</option>
          <option key="thriller" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
