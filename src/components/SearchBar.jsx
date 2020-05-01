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
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <fieldset>
          <form style={{ marginLeft: '33px', padding: '8px 3px' }}>
            <label htmlFor="">
              Inclui o texto:
              <br />
              <input
                value={this.props.searchText}
                onChange={onSearchTextChange}
                style={{ width: '600px', borderRadius: '5px' }}
                type="text"
                name=""
                id=""
              />
            </label>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default SearchBar;
