import React, { Component } from 'react';

export class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
