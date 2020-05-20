import React, { Component } from 'react';

const genreArray = [
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
  }

  generateInputField(title, name, type, value) {
    return (
      <label htmlFor={title} className="label">
        {title}
        <input
          className={name}
          type={type}
          value={value}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  generateTextArea(title, name, value) {
    return (
      <label htmlFor={title} className="label">
        {title}
        <textarea
          className={name}
          value={value}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  changeState(event, type) {
    const { value } = event.target;
    this.setState({ [type]: type === 'rating' ? parseFloat(value) : value });
  }

  addButton() {
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

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form className="input-fields">
        {this.generateInputField('Título', 'title', 'text', title)}
        {this.generateInputField('Subtítulo', 'subtitle', 'text', subtitle)}
        {this.generateInputField('Imagem', 'imagePath', 'text', imagePath)}
        {this.generateTextArea('Sinopse', 'storyline', storyline)}
        {this.generateInputField('Avaliação', 'rating', 'number', rating)}
        <label htmlFor="Gênero" className="label">
          Gênero
          <select value={this.state.genre} onChange={(event) => this.changeState(event, 'genre')}>
            {genreArray.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => this.addButton()}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
