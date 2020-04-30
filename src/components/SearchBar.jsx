// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
    /*constructor(props) {
      super(props);
      this.state = { 
        searchText,
        bookmarkedOnly,
        selectedGenre };
    }*/

    render() {
      const { searchText, bookmarkedOnly, selectedGenre, onBookmarkedChange,
      onSearchTextChange, onSelectedGenreChange } = this.props
      return (
        <fieldset>
          <form>
            <div>
              <label htmlFor="title">Inclui o texto:</label>
              <input 
                type="text"
                name="title"
                id="titel"
                onChange={onSearchTextChange}
                value={searchText}
              />
            </div>
            <div>
              <label htmlFor="favsFilter">Mostrar somente favoritos</label>
              <input
                type="checkbox"
                name="favsFilter"
                onChange={onBookmarkedChange}
                checked={bookmarkedOnly}
              />
            </div>
            <div>
              <label htmlFor="genres">Filtrar por gênero</label>
              <select
              name="genres"
              value={selectedGenre}
              onChange={onSelectedGenreChange}>
                <option value="">Todos</option>
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
              </select>
            </div>
          </form>
        </fieldset>
      );
    }
}

export default SearchBar;