import React from 'react';

class SearchBar extends React.Component {
  render () {
    return (
      <form>

        <label htmlFor='text'>Inclui o texto:</label>
        <input name='text' type='text' 
        onChange={this.props.onSearchTextChange} value={this.props.searchText}></input>

        <br />

        <label htmlFor='bookmarked'>Mostrar somente favoritos</label>
        <input name='bookmarked' type='checkbox' checked={this.props.bookmarkedOnly}
        onChange={this.props.onBookmarkedChange}></input>

        <br />
        
        <label htmlFor='genre'>Filtrar por gênero</label>
        <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

      </form>
    )
  }
}

export default SearchBar;