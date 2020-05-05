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
    this.movieSubmit = this.movieSubmit.bind(this);
  }

  movieSubmit(event) {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    console.log(event);
  }

  titleFormRenderer() {
    const { title } = this.state;
    return (
      <label htmlFor="title">
        Título
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </label>
    );
  }

  subtitleFormRenderer() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={subtitle}
          onChange={(event) => this.setState({ subtitle: event.target.value })}
        />
      </label>
    );
  }

  imagePathFormRenderer() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={imagePath}
          onChange={(event) => this.setState({ imagePath: event.target.value })}
        />
      </label>
    );
  }

  storylineFormRenderer() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          value={storyline}
          onChange={(event) => this.setState({ storyline: event.target.value })}
        />
      </label>
    );
  }

  ratingFormRenderer() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={rating}
          onChange={(event) => this.setState({ rating: Number(event.target.value) })}
        />
      </label>
    );
  }

  genreFormRenderer() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          name="genre"
          id="genre"
          value={genre}
          onChange={(event) => this.setState({ genre: event.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form action="" method="get">
        {this.titleFormRenderer()}
        {this.subtitleFormRenderer()}
        {this.imagePathFormRenderer()}
        {this.storylineFormRenderer()}
        {this.ratingFormRenderer()}
        {this.genreFormRenderer()}
        <button type="button" onClick={(event) => this.movieSubmit(event)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
