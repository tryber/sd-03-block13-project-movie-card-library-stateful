import React from 'react';
import Genre from '../genreData';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyline: '',
      subtitle: '',
      title: '',
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  changeHandle(event, stateElem) {
    const { value } = event.target;

    this.setState({ [stateElem]: (stateElem === 'rating' ? parseFloat(value) : value) });
  }

  submitMovie(event) {
    const { onClick } = this.props;

    onClick(this.state);

    this.setState({
      genre: 'action',
      imagePath: '',
      rating: 0,
      storyline: '',
      subtitle: '',
      title: '',
    });
    console.log(event);
    // event.preventDefault();
  }

  titleForm() {
    const { title } = this.state;

    return (
      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => this.changeHandle(event, 'title')}
          />
        </label>
      </div>
    );
  }

  subtitleForm() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={(event) => this.changeHandle(event, 'subtitle')}
        />
      </label>
    );
  }

  imageForm() {
    const { imagePath } = this.state;

    return (
      <div>
        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={(event) => this.changeHandle(event, 'imagePath')}
          />
        </label>
      </div>
    );
  }

  storylineForm() {
    const { storyline } = this.state;

    return (
      <div>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            value={storyline}
            onChange={(event) => this.changeHandle(event, 'storyline')}
          />
        </label>
      </div>
    );
  }

  ratingForm() {
    const { rating } = this.state;

    return (
      <div>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(event) => this.changeHandle(event, 'rating')}
          />
        </label>
      </div>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    const genreData = Genre.slice(1, 4);

    return (
      <div>
        <label htmlFor="genre">
          Gênero
          <select
            id="genre"
            value={genre}
            onChange={(event) => this.changeHandle(event, 'genre')}
          >
            {genreData.map((a) => <option key={a.text} value={a.value}>{a.text}</option>)}
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <form>
        {this.titleForm()}
        {this.subtitleForm()}
        {this.imageForm()}
        {this.storylineForm()}
        {this.ratingForm()}
        {this.renderGenre()}
        <button
          type="button"
          onClick={(event) => this.submitMovie(event)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
