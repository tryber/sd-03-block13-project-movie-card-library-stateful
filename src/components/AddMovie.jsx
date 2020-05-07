import React, { Component } from 'react';

const genreArray = [
    { text: 'Ação', value: 'action' },
    { text: 'Comédia', value: 'comedy' },
    { text: 'Suspense', value: 'thriller' },
];

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

  render() {
    return (
      <div>
        <form>
          <label htmlFor="Título">Título</label>
          <input type="text" name="" id="" value={this.state.title} />
          <label htmlFor="Subtítulo">Subtítulo</label>
          <input type="text" name="" id="" value={this.state.subtitle} />
          <label htmlFor="Imagem">Imagem</label>
          <input type="text" name="" id="" value={this.state.imagePath} />
          <label htmlFor="Sinopse">Sinopse</label>
          <textarea name="" id="" cols="30" rows="10" value={this.state.storyline} />
          <label htmlFor="Avaliação">Avaliação</label>
          <input type="number" name="" id="" value={this.state.rating} />
          <label htmlFor="Gênero">Gênero</label>
          <select name="" id="" value={this.state.genre}>
            {genreArray.map(({ text, value }) => (
              <option key={text} value={value}>{text}</option>
            ))}
          </select>
          <button>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
