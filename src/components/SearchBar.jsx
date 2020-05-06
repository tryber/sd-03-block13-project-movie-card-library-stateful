import React from 'react';

const genreArray = [
    { text: 'Todos', value: '' },
    { text: 'Ação', value: 'action' },
    { text: 'Comédia', value: 'comedy' },
    { text: 'Suspense', value: 'thriller' },
    ];

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="text">Inclui o texto:</label>
          <input id="text" type="text" value={searchText} onChange={onSearchTextChange} />
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
