// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    /*
    const {
    searchText, onSearchTextChange,
    bookmarkedOnly, onBookmarkedChange, selectedGenre,
    onSelectedGenreChange
    } = this.props;
    */
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="searchText"><span>Inclui o texto:</span>
            <input
              type="text" name="searchBarText" value={searchText} id="searchText"
              onChange={onSearchTextChange}
            />
          </label>
          <label htmlFor="checkbox"><span>Mostrar somente favoritos</span>
            <input
              type="checkbox" name="searchBarCheckbox" id="checkbox"
              checked={bookmarkedOnly} onChange={onBookmarkedChange}
            />
          </label>
        </div>
        <label htlFor="gender"><span>Filtrar por gênero</span>
          <select value={selectedGenre} id="gender" onChange={onSelectedGenreChange}>
            <option key="" value="">Todos</option>
            <option key="action" value="action">Ação</option>
            <option key="comedy" value="comedy">Comédia</option>
            <option key="thriller" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
