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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    if (name === 'rating') {
      this.setState({ [name]: Number(event.target.value) });
    } else {
      this.setState({ [name]: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="Título">Título</label>
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChange(event, 'title')}
          />
          <label htmlFor="Subtítulo">Subtítulo</label>
          <input
            type="text"
            value={this.state.subtitle}
            onChange={(event) => this.handleChange(event, 'subtitle')}
          />
          <label htmlFor="Imagem">Imagem</label>
          <input
            type="text"
            value={this.state.imagePath}
            onChange={(event) => this.handleChange(event, 'imagePath')}
          />
          <label htmlFor="Sinopse">Sinopse</label>
          <textarea
            cols="30"
            rows="10"
            value={this.state.storyline}
            onChange={(event) => this.handleChange(event, 'storyline')}
          />
          <label htmlFor="Avaliação">Avaliação</label>
          <input
            type="number"
            value={this.state.rating}
            onChange={(event) => this.handleChange(event, 'rating')}
          />
          <label htmlFor="Gênero">Gênero</label>
          <select
            value={this.state.genre}
            onChange={(event) => this.handleChange(event, 'genre')}
          >
            {genreArray.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </select>
          <button>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
