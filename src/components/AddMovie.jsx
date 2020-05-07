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
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <label htmlFor="subtitle">Subtítulo</label>
          <label htmlFor="imagePath">Imagem</label>
          <label htmlFor="storyLine">Sinopse</label>
          <label htmlFor="rating">Avaliação</label>
          <label htmlFor="genre">Gênero</label>
          <button type="button" onClick={this.addMovie}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
