import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = initialState;
  }
  render() {
    return null;
  }
}

export default AddMovie;
