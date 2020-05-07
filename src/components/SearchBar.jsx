import React from 'react';

class SearchBar extends React.Component {
  /*c onstructor(props) {
    super(props);
  } */
  render() {
    return (
      <form>
        <div>
          <label htmlFor="textSearch">Inclui o texto:</label>
          <input id="textSearch" type="text" value={this.props.searchText} 
          onChange={this.props.onSearchTextChange} />
        </div>
        <div>
          <label htmlFor="selectFavorites">Mostrar somente favoritos</label>
          <input id="selectFavorites" type="checkbox" checked={this.props.bookmarkedOnly} 
          onChange={this.props.onBookmarkedChange} />
        </div>
        <div>
          <label htmlFor="filter">Filtrar por gênero</label>
          <select id="filter" value={this.props.selectedGenre} 
          onChange={this.props.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
