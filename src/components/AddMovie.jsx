import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      gender: 'action',
      imagePath: '',
      rating: 0,
      storyline: '',
      subtitle: '',
      title: '',
    });
  }

  render() {
    const { gender, imagePath, rating, storyline, subtitle, title } = this.state;
    return (
      <form>
        <label>Título
          <input 
            type={'text'}
          />
        </label>
      </form>
    );
  }
}