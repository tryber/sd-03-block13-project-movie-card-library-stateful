import React from 'react';

const componentInitialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = componentInitialState;
    this.cTitle = this.cTitle.bind(this);
    this.cSubtitle = this.cSubtitle.bind(this);
    this.cImagePath = this.cImagePath.bind(this);
    this.cStoryline = this.cStoryline.bind(this);
    this.cRating = this.cRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  cTitle(event) {
    this.setState({ title: event.target.value });
  }

  cSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  cImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  cStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  cRating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  handleChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(componentInitialState);
  }

  title() {
    const { title } = this.state;
    return (
      <label htmlFor="titulo">
        Título
        <input
          type="text"
          name="title"
          id="titulo"
          onChange={this.cTitle}
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
          name="subtitle"
          id="subtitulo"
          onChange={this.cSubtitle}
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
          name="title"
          id="imagem"
          onChange={this.cImagePath}
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
          name="storyline"
          id="sinopse"
          onChange={this.cStoryline}
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
          name="rating"
          id="avaliacao"
          onChange={this.cRating}
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
          name="genre"
          id="genero"
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
          {/* <fieldset> */}
          <legend>Please include a movie</legend>
          {/* <div> */}
          {this.title()}
          {this.subtitle()}
          {this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          <button
            type="button"
            value="Adicionar filme"
            onCLick={this.handleClick}
          >
            Adicionar filme
          </button>
          {/* </div> */}
          {/* </fieldset> */}
        </form>
      </div>
    );
  }
}
