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
    this.updateState = this.updateState.bind(this);
    this.clicando = this.clicando.bind(this);
  }

  updateState(e) {
    this.setState({
      title: e.target.value,
      subtitle: e.target.value,
      imagePath: e.target.value,
      storyline: e.target.value,
      rating: parseFloat(e.target.value),
      genre: e.target.value,
    });
  }

  clicando() {
    this.props.onClick(this.state);
    this.setState({ subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action' });
  }

  render() {
    return (
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" value={this.state.title} onChange={this.updateState} />
        <label htmlFor="subtitulo">Subtítulo</label>
        <input type="text" id="subtitulo" value={this.state.subtitle} onChange={this.updateState} />
        <label htmlFor="imagem">Imagem</label>
        <input type="text" id="imagem" value={this.state.imagePath} onChange={this.updateState} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea id="sinopse" value={this.state.storyline} onChange={this.updateState} />
        <label htmlFor="avaliacao">Avaliação</label>
        <input type="number" id="avaliacao" value={this.state.rating} onChange={this.updateState} />
        <label htmlFor="genero">Gênero</label>
        <select id="genero" onChange={this.updateState} value={this.state.genre}>
          <option value={'action'}>Ação</option>
          <option value={'comedy'}>Comédia</option>
          <option value={'thriller'}>Suspense</option>
        </select>
        <button onClick={this.clicando}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
