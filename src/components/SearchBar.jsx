import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form>
          <label>Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} />
          <label>Mostrar somente favoritos</label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label>Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
