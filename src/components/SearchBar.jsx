import React from 'react';

import './SearchBar.css';

const options = [
  ['', 'Todos'],
  ['action', 'Ação'],
  ['comedy', 'Comédia'],
  ['thriller', 'Suspense'],
];

function searchTextLabel(text, onChange) {
  return (
    <label htmlFor={'searchText'} className={'flex-label'}>Inclui o texto:
      <input
        type={'text'}
        value={text}
        id={'searchText'}
        onChange={onChange}
      />
    </label>
  );
}

function bookMarkedLabel(check, onChange) {
  return (
    <label htmlFor={'check'} className={'flex-label'}>Mostrar somente favoritos
      <input
        className={'check'}
        type={'checkbox'}
        id={'check'}
        checked={check}
        onChange={onChange}
      />
    </label>
  );
}

function SearchBar(props) {
  const { searchText, bookmarkedOnly, selectedGenre } = props;
  const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = props;
  return (
    <form className={'forms-search-bar'}><h3>Procure um Card</h3>
      {searchTextLabel(searchText, onSearchTextChange)}
      {bookMarkedLabel(bookmarkedOnly, onBookmarkedChange)}
      <label htmlFor={'genreFilter'} className={'flex-label'}>Filtrar por gênero
        <select 
          value={selectedGenre}
          id={'genreFilter'}
          onChange={onSelectedGenreChange}
        >
          {options.map(([en, pt]) => <option key={en} value={en}>{pt}</option>)}
        </select>
      </label>
    </form>
  );
}

export default SearchBar;
