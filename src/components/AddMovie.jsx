// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    const { onClick } = this.props;
    const arrayImputs = ['Título',
      'Subtítulo',
      'imagem',
      'Sinopse',
      'rating',
    ];
    const types = [
      'text',
      'text',
      'text',
      'textarea',
      'number',
    ];
    const arraySelect = [
      'Ação',
      'Comédia',
      'Suspense',
    ];
    const arrayVal = [
      'action',
      'comedy',
      'thriller',
    ];
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
        <label htmlFor="Gênero">
          Gênero
          <select
            name="genre"
            value={detructuring.texts}
            onChange={this.handleChange}
            text="Gênero"
          >
            {arraySelect.map((el, index) => (
              <option value={
                arrayVal[index]
              }
              >
                {el}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default AddMovie;
