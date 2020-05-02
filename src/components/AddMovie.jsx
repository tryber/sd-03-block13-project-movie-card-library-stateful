// implement AddMovie component here
import React, { Component } from 'react';

const genreArr = [
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

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
    this.generateInput = this.generateInput.bind(this);
  }

  generateInput(txt, name, type, value) {
    return (
      <label htmlFor={name}>
        {txt}
        <input
          type={type}
          value={value}
          id={name}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  generateTextArea(txt, name, value) {
    return (
      <label htmlFor={name}>
        {txt}
        <textarea
          id={name}
          value={value}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  btnClick() {
    this.props.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeState(event, key) {
    const { value } = event.target;
    this.setState({ [key]: key === 'rating' ? parseFloat(value) : value });
  }

  render() {
    return (
      <div>
        <form>
          {this.generateInput('Título', 'title', 'text', this.state.title)}
          {this.generateInput('Subtítulo', 'subtitle', 'text', this.state.subtitle)}
          {this.generateInput('Imagem', 'imagePath', 'text', this.state.imagePath)}
          {this.generateTextArea('Sinopse', 'storyline', this.state.storyline)}
          {this.generateInput('Avaliação', 'rating', 'number', this.state.rating)}
          <label htmlFor="genre">Gênero</label>
          <select value={this.state.genre} onChange={(event) => this.changeState(event, 'genre')}>
            {genreArr.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.btnClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
