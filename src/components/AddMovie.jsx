// implement AddMovie component here
import React, { Component } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}