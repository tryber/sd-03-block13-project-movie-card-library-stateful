import React, { Component } from 'react';

const genreArray = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

export class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="text">Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} />
          <label htmlFor="checkbox">Mostrar somente favoritos</label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label htmlFor="genre">Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            {genreArray.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
