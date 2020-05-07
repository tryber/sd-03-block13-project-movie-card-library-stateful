import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, type) {
    const { value } = event.target;
    if (name === 'rating') {
      this.setState({ [type]: Number(value) });
    } else {
      this.setState({ [type]: value });
    }
  }

  titulo() {
    const { title } = this.state;
    return (
      <label htmlFor="titulo">
        Título
        <input
          type="text"
          id="titulo"
          name="title"
          onChange={(elem) => this.handleChange(elem,'title')}
          value={title}
        />
      </label>
    );
  }

  subtitulo() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitulo">
        Subtítulo
        <input
          type="text"
          id="subtitulo"
          name="subtitle"
          onChange={(elem) => this.handleChange(elem,'subtitle')}
          value={subtitle}
        />
      </label>
    );
  }

  imagem() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagem">
        Imagem
        <input
          type="text"
          id="imagem"
          name="imagePath"
          onChange={(elem) => this.handleChange(elem,'imagePath')}
          value={imagePath}
        />
      </label>
    );
  }

  sinopse() {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopse">
        Sinopse
        <textarea
          type="textarea"
          id="sinopse"
          name="storyline"
          onChange={(elem) => this.handleChange(elem,'storyline')}
          value={storyline}
        />
      </label>
    );
  }

  avaliacao() {
    const { rating } = this.state;
    return (
      <label htmlFor="avaliacao">
        Avaliação
        <input
          type="number"
          id="avaliacao"
          name="rating"
          onChange={(elem) => this.handleChange(elem,'rating')}
          value={Number(rating)}
        />
      </label>
    );
  }

  genero() {
    const { genre } = this.state;
    return (
      <label htmlFor="genero">
        Gênero
        <select
          type="text"
          id="genero"
          name="genre"
          onChange={this.handleChange['genre']}
          value={genre}
        >
          <option text="Ação" value="action">Ação</option>
          <option text="Comédia" value="comedy">Comédia</option>
          <option text="Suspense" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <form>
        {this.titulo()}
          {this.subtitulo()}
          {this.imagem()}
          {this.sinopse()}
          {this.avaliacao()}
          {this.genero()}
        </form>
        <button
          type="button"
          value="Adicionar filme"
          onClick={this.handleClick}
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default AddMovie;
