import React from 'react';

class SearchBar extends React.Component {
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    const bookmarkedOnly = this.props.bookmarkedOnly;
    const onBookmarkedChange = this.props.onBookmarkedChange;
    const selectedGenre = this.props.selectedGenre;
    const onSelectedGenreChange = this.props.onSelectedGenreChange;
    return (
      <div>
        <form>
          <label>
            Inclui o texto
            <input type="text" value={searchText} onChange={onSearchTextChange}></input>
          </label>
          <label>
            Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}></input>
          </label>
          <label>
            Filtrar por gênero
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value={""}>Todos</option>
              <option value={"action"}>Ação</option>
              <option value={"comedy"}>Comédia</option>
              <option value={"thriller"}>Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
