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
  }

  generateInputField(title, name, type, value) {
    return (
      <label htmlFor={title}>
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
      <label htmlFor={title}>
        {title}
        <input
          className={name}
          value={value}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  generateGenre(title, name, value) {
    return (
      <label htmlFor={title}>
        {title}
        <select value={value} onChange={(event) => this.changeState(event, name)}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  changeState(event, type) {
    const { value } = event.target;
    this.setState({ [type]: type === 'rating' ? parseFloat(value) : value });
  }

  addButton() {
    this.props.onClick = this.state;
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
      <form>
        {this.generateInputField('Título', 'title', 'text', title)}
        {this.generateInputField('Subtítulo', 'subtitle', 'text', subtitle)}
        {this.generateInputField('Imagem', 'imagePath', 'text', imagePath)}
        {this.generateTextArea('Sinopse', 'storyline', storyline)}
        {this.generateInputField('Avaliação', 'rating', 'number', rating)}
        <button onClick={this.addButton}>Adicionar filme</button>
        {this.generateGenre(genre)}
      </form>
    );
  }
}

export default AddMovie;
