import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form>
        <label htmlFor="text">Pesquisar o texo:</label>
        <input name="text" type="text" onChange={onSearchTextChange} value={searchText} />
        <br />
        <label htmlFor="bookmarked">Apenas favoritos</label>
        <input
          name="bookmarked"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <br />
        <label htmlFor="genre">Filtrar por gênero</label>
        <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
