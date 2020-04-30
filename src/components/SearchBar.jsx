import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (

      <fieldset>
        Filtros
        <label htmlFor>
          <div>Inclui o texto:</div>
          <input value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor>
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value=''>Todos</option>
            <option value='Action'>Ação</option>
            <option value='comedy' >Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

export default SearchBar;
