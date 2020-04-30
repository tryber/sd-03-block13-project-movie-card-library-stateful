// implement AddMovie component here
import React from 'react';
import Genre from '../genreData';

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
    this.stateUpdateHandler = this.stateUpdateHandler.bind(this);
    this.AddMovieButton = this.AddMovieButton.bind(this);
    this.firstFormsInputs = this.firstFormsInputs.bind(this);
    this.secondFormsInputs = this.secondFormsInputs.bind(this);
  }

  stateUpdateHandler(event, name) {
    return name === 'rating'
      ? this.setState({ [name]: parseFloat(event.target.value) })
      : this.setState({ [name]: event.target.value });
  }

  AddMovieButton() {
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
  }

  firstFormsInputs() {
    return (
      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={(event) => this.stateUpdateHandler(event, 'title')}
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={this.state.subtitle}
            onChange={(event) => this.stateUpdateHandler(event, 'subtitle')}
          />
        </label>
      </div>
    );
  }

  secondFormsInputs() {
    return (
      <div>
        <label htmlFor="movie-image">
          Imagem
          <input
            type="text"
            name="movie-image"
            id="movie-image"
            value={this.state.imagePath}
            onChange={(event) => this.stateUpdateHandler(event, 'imagePath')}
          />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            id="storyline"
            name="storyline"
            rows="4"
            cols="50"
            value={this.state.storyline}
            onChange={(event) => this.stateUpdateHandler(event, 'storyline')}
          />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            value={this.state.rating}
            onChange={(event) => this.stateUpdateHandler(event, 'rating')}
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.firstFormsInputs()}
          {this.secondFormsInputs()}
          <label htmlFor="genre">
            Gênero
            <select
              name="genre"
              id="genre"
              value={this.state.genre}
              onChange={(event) => this.stateUpdateHandler(event, 'genre')}
            >
              {Genre.slice(1, 4).map((genreGenerator) => (
                <option key={genreGenerator.label} value={genreGenerator.value}>
                  {genreGenerator.label}
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={this.AddMovieButton}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
