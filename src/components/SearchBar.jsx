import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,  } = this.props;
    return (
      <div>
        <form action="submit">
          <label htmlFor="input"> Pesquisar Filmes:
          <br/>
            <input type="text"/>
            <input type="submit" name="submit" id=""/>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;
