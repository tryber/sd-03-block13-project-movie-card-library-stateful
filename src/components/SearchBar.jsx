// implement SearchBar component here
import React, { Component } from 'react';
import SearchbarInput from './searchbarInput';

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
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   // bookmarkedOnly,
    //   // selectedGenre,
    //   // onSelectedGenreChange,
    // } = this.props;

    return (
      <div>
        <SearchbarInput />
      </div>
    );
  }
}

export default SearchBar;
