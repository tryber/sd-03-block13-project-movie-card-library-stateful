// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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
    this.clicando = this.clicando.bind(this);
    this.inputs = this.inputs.bind(this);
    this.inputArea = this.inputArea.bind(this);
  }
  updateState(event) {
    const { value } = event.target;
    this.setState(
      {
        subtitle: value,
        title: value,
        imagePath: value,
        storyline: value,
        rating: parseFloat(value),
        genre: value,
      },
    );
  }

  clicando() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputs(texto, id, valor, tipo, nome) {
    return (
      <label htmlFor={id}>{texto}
        <input
          id={id}
          type={tipo}
          value={valor}
          onChange={(e) => this.setState({ [nome]: e.target.value })}
        />
      </label>
    );
  }

  inputArea(texto, id, valor, nome) {
    return (
      <label htmlFor={id}>{texto}
        <textarea
          id={id}
          value={valor}
          onChange={(e) => this.setState({ [nome]: e.target.value })}
        />
      </label>
    );
  }

  render() {
    return (
      <div><form>
        {this.inputs('Título', 'title', this.state.title, 'text', 'title')}
        {this.inputs('Subtítulo', 'subtitle', this.state.subtitle, 'text', 'subtitle')}
        {this.inputs('Imagem', 'image', this.state.imagePath, 'text', 'imagePath')}
        {this.inputArea('Sinopse', 'sin', this.state.storyline, 'storyline')}
        <label htmlFor="rating">Avaliação</label>
        <input
          type="number"
          id="rating"
          value={this.state.rating}
          onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })}
        />
        <label htmlFor="gender">Gênero</label>
        <select
          id="gender"
          value={this.state.genre}
          onChange={(e) => this.setState({ genre: e.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={this.clicando}>Adicionar filme</button></form></div>
    );
  }
}

export default AddMovie;
