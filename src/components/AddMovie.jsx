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
      genre: 'action',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { onClick } = this.props;
    const arrayImputs = ['Título', 'Subtítulo', 'Imagem', 'Sinopse', 'Avaliação'];
    const types = ['text', 'text', 'text', 'textarea', 'number'];
    const detructuring = this.state;
    return (
      <div>
        <form>
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
          <AddLabelOption action={detructuring.genre} handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddMovie;
