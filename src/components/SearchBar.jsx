import React from 'react';
const options = [
  ['', 'Todos'],
  ['action', 'Ação'],
  ['comedy', 'Comédia'],
  ['thriller', 'Suspense']
];

function SearchBar(props) {
  const { searchText, bookmarkedOnly: bMO, selectedGenre } = props;
  const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = props;
  return (
    <form>
      <label htmlFor={'searchText'}>Inclui o texto:
        <input type={'text'} value={searchText} id={'searchText'} onChange={onSearchTextChange} />
      </label>
      <label htmlFor={'check'}>Mostrar somente favoritos
        <input type={'checkbox'} id={'check'} checked={bMO} onChange={onBookmarkedChange} />
      </label>
      <label hthmlFor={'genreFilter'}>Filtrar por gênero
        <select value={selectedGenre} id={'genreFilter'} onChange={onSelectedGenreChange}>
          {options.map(([ en, pt ]) => <option key={en} value={en}>{pt}</option>)}
        </select>
      </label>
    </form>
  );
}

export default SearchBar;