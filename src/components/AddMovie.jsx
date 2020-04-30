import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.hadleChange = this.hadleChange.bind(this);
  }


  hadleChange(evento) {
    const { name, value } = evento.target;
    this.setState = (() => ({ [name]: value }));
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" name="title" value={this.state.title} onChange={this.hadleChange} />
        </label>

        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" name="subtitle" value={this.state.subtitle} onChange={this} />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input type="text" name="imagePath" value={this.state.imagePath} onChange="" />
        </label>
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={this.state.storyline} onChange="" />


        <label htmlFor="rating">Avaliação</label>
        <input type="Number" name="rating" value={this.state.rating} onChange="" />

        <label>Gênero</label>

        <select value={this.state.genre} onChange="">
          <option valor="action">Ação</option>
          <option valor="comedy">Comédia</option>
          <option valor="thriller">Suspense</option>
        </select>
        <button onClick="" >Adicionar filme</button>
      </form>
    );
  }
}


export default AddMovie;
