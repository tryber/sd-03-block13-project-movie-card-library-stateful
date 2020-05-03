// implement AddMovie component here
import React, { Component } from 'react';

import Input from './Input';
import Select from './Select';

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
    const { value, name } = event.target;
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
    const optionsArr = [['action', 'Ação'], ['comedy', 'Comédia'], ['thriller', 'Suspense']];
    return (
      <form>
        <Input type="text" innerText="Título" name="title" value={title} onChange={this.onChange} />
        <Input innerText="Subtítulo" name="subtitle" value={subtitle} onChange={this.onChange} />
        <Input innerText="Imagem" name="imagePath" value={imagePath} onChange={this.onChange} />
        <label htmlFor="storyline">
          Sinopse
          <textarea name="storyline" value={storyline} onChange={this.onChange} />
        </label>
        <Input
          innerText="Avaliação"
          name="rating"
          value={rating}
          onChange={this.onChange}
          type="number"
        />
        <Select value={genre} onChange={this.onChange} options={optionsArr} name="genre" />
        <button type="button" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
