// implement SearchBar component here
import React, { Component } from 'react';

export class SearchBar extends Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     searchText: '',
  //   }
  // }

  //   searchText, uma string
  // onSearchTextChange, uma callback
  // bookmarkedOnly, um boolean
  // onBookmarkedChange, uma callback
  // selectedGenre, uma string
  // onSelectedGenreChange, uma callback

  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;

    return (
      <div>
          <form style={{ marginLeft: '33px', padding: '8px 3px' }}>
            <form a></form>
            <label htmlFor="Inclui_o_texto">
              Inclui o texto:
              <br />
              <input
                id="Inclui_o_texto"
                value={searchText}
                onChange={onSearchTextChange}
                style={{ width: '600px', borderRadius: '5px' }}
                type="text"
                name=""
              />
            </label>
          </form>
      </div>
    );
  }
}

export default SearchBar;
