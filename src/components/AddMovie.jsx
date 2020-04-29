import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props)
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
      <form>
        <label>Título</label>
        <input type="text" name="" value={this.state.title} onChange="" />

        <label>Subtítulo</label>
        <input type="text" name="" value={this.state.subtitle} onChange="" />

        <label>Imagem</label>
        <input type="text" name="" value={this.state.imagePath} onChange="" />


        <label>Sinopse</label>
        <textarea value={this.state.storyline} onChange="" />


        <label>Avaliação</label>
        <input type="Number" value={this.state.rating} onChange="" />

        <label>Gênero</label>
        <select value={this.state.genre} onChange="" >
          <option valor="action">Ação</option>
          <option valor="comedy">Comédia</option>
          <option valor="thriller">Suspense</option>
        </select>
        <button onClick="" >Adicionar filme</button>
      </form>
    )
  }
}


export default AddMovie;