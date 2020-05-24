import React, { Component } from 'react';

const genreArray = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="text"> Inclui o texto:
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="check"> Mostrar somente favoritos
            <input type="checkbox" value={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="genger"> Filtrar por gênero
            <select id="genger" value={selectedGenre} onChange={onSelectedGenreChange} >
              {
                genreArray.map(({ text, value }) => (
                  <option key={text} value={value}>
                    {text}
                  </option>
                ))
              }
            </select>
          </label>
        </form>
      </div>
    );
  }
}
export default SearchBar;
