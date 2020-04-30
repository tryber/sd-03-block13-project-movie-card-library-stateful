// implement AddMovie component here
import React, { Component } from 'react';
import AddLabelOption from './AddLabelOption';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const arrayImputs = ['Título', 'Subtítulo', 'imagem', 'Sinopse', 'rating'];
    const types = ['text', 'text', 'text', 'textarea', 'number'];
    const detructuring = this.state;
    return (
      <div>
        {arrayImputs.map((texts, index) => (
          <label htmlFor={texts}>
            {texts}
            <input
              type={types[index]}
              name={texts}
              value={detructuring.texts}
              onChange={this.handleChange}
              text={texts}
            />
          </label>
        ))}
        <AddLabelOption />
      </div>
    );
  }
}

export default AddMovie;
