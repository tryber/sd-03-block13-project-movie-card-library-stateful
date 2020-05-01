import React from 'react';

const initialState = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubitle = this.handleChangeSubitle.bind(this);
    this.handleChangeImagePath = this.handleChangeImagePath.bind(this);
    this.handleChangeStoryline = this.handleChangeStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeSubitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleChangeImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleChangeStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  handleChangeRating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  title() {
    const { title } = this.state;
    return (
      <label htmlFor="titulo">
        Título
        <input
          type="text"
          id="titulo"
          name="title"
          onChange={this.handleChangeTitle}
          value={title}
        />
      </label>
    );
  }

  subtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitulo">
        Subtítulo
        <input
          type="text"
          id="subtitulo"
          name="subtitle"
          onChange={this.handleChangeSubitle}
          value={subtitle}
        />
      </label>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagem">
        Imagem
        <input
          type="text"
          id="imagem"
          name="imagePath"
          onChange={this.handleChangeImagePath}
          value={imagePath}
        />
      </label>
    );
  }

  storyline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopse">
        Sinopse
        <textarea
          type="textarea"
          id="sinopse"
          name="storyline"
          onChange={this.handleChangeStoryline}
          value={storyline}
        />
      </label>
    );
  }

  rating() {
    const { rating } = this.state;
    return (
      <label htmlFor="avaliacao">
        Avaliação
        <input
          type="number"
          id="avaliacao"
          name="rating"
          onChange={this.handleChangeRating}
          value={rating}
        />
      </label>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genero">
        Gênero
        <select
          type="text"
          id="genero"
          name="genre"
          onChange={this.handleChangeGenre}
          value={genre}
        >
          <option text="Ação" value="action">Ação</option>
          <option text="Comédia" value="comedy">Comédia</option>
          <option text="Suspense" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.title()}
          {this.subtitle()}
          {this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          <button
            type="button"
            value="Adicionar filme"
            onClick={this.handleClick}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
