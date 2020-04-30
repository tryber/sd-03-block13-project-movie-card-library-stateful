// implement AddMovie component here
import React, { Component } from 'react';

import Input from './Input';

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
    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <fieldset>
        <Input
          innerText="Título"
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <Input
          innerText="Subtítulo"
          name="subtitle"
          value={subtitle}
          onChange={this.onChange}
        />
        <Input
          innerText="Imagem"
          name="imagePath"
          value={imagePath}
          onChange={this.onChange}
        />
        <label htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.onChange}
          />
        </label>
        <Input
          innerText="Avaliação"
          name="rating"
          value={rating}
          onChange={this.onChange}
          type="number"
        />
        <select value={genre} name="genre" onChange={this.onChange}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={this.addMovie}>
          Adicionar filme
        </button>
      </fieldset>
    );
  }
}

export default AddMovie;
