import React, { Component } from 'react';

import Input from './Input';
import Select from './Select';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <fieldset>
        <Input
          name="searchText"
          innerText="Inclui o texto:"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <Input
          innerText="Mostrar somente favoritos"
          name="bookMarker"
          type="checkbox"
          check={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <Select
          options={[['', 'Todos'], ['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']]}
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        />
      </fieldset>
    );
  }
}

export default SearchBar;
