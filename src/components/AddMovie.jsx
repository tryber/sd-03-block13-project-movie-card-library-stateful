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

  render() {
    return (
      <div><form><label htmlFor="title">Título</label>
        <input
          onChange={(e) => this.setState({ title: e.target.value })}
          type="text"
          id="title"
          value={this.state.title}
        />
        <label htmlFor="subtitle">Subtítulo</label>
        <input
          onChange={(e) => this.setState({ subtitle: e.target.value })}
          type="text"
          id="subtitle"
          value={this.state.subtitle}
        />
        <label htmlFor="image">Imagem</label>
        <input
          onChange={(e) => this.setState({ imagePath: e.target.value })}
          type="text"
          id="image"
          value={this.state.imagePath}
        />
        <label htmlFor="sin">Sinopse</label>
        <textarea
          id="sin"
          value={this.state.storyline}
          onChange={(e) => this.setState({ storyline: e.target.value })}
        />
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
          onChange={(e) => this.setState({ genre: e.target.value })}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={this.clicando}>Adicionar filme</button></form></div>
    );
  }
}

export default AddMovie;
