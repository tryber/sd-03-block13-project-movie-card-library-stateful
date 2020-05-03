import React, { Component } from 'react';

const searchInput = (searchText, onSearchTextChange) => (
  <label htmlFor="searchText">
    Inclui o texto:
    <input
      name="searchText"
      value={searchText}
      onChange={onSearchTextChange}
      type="text"
    />
  </label>
);
const onlyBookMarked = (bookmarkedOnly, onBookmarkedChange) => (
  <label htmlFor="bookMarker">
    Mostrar somente favoritos
    <input
      name="bookMarker"
      type="checkbox"
      checked={bookmarkedOnly}
      onChange={onBookmarkedChange}
    />
  </label>
);
const selection = (selectedGenre, onSelectedGenreChange) => {
  const selectArr = [
    ['', 'Todos'],
    ['action', 'Ação'],
    ['comedy', 'Comédia'],
    ['thriller', 'Suspense'],
  ];
  return (
    <>
      <label htmlFor="genreSelecion">Filtrar por gênero</label>
      <select
        id="genreSelecion"
        name="genreSelecion"
        value={selectedGenre}
        onChange={onSelectedGenreChange}
      >
        {selectArr.map((option) => (
          <option key={option[0]} value={option[0]}>
            {option[1]}
          </option>
        ))}
      </select>
    </>
  );
};
class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        {searchInput(searchText, onSearchTextChange)}
        {onlyBookMarked(bookmarkedOnly, onBookmarkedChange)}
        {selection(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
