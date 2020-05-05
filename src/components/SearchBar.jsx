// implement SearchBar component here
class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (<div>
      <form>
        <label htmlFor="include">Inclui o texto
            <input id="include" type="text" value={searchText} onChange={onSearchTextChange} />
        </label><br />
        <label htmlFor="f">Mostrar somente favoritos
            <input id="f" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label><br />
        <label htmlFor="filter">Filtrar por gênero
          <select id="filter" value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select></label>
      </form>
    </div>);
  }
}
