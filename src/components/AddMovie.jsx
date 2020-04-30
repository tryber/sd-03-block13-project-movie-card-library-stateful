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
    if (stateElem === 'rating') {
      this.setState({ rating: parseFloat(event.target.value) });
    } else {
      this.setState({ [stateElem]: event.target.value });
    }
  }

  submitMovie() {
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
  }

  firstForm() {
    const { title, subtitle, imagePath } = this.state;

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
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(event) => this.changeHandle(event, 'subtitle')}
          />
        </label>
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

  secondForm() {
    const { rating, storyline } = this.state;

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

  finalForm() {
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
        {this.firstForm()}
        {this.secondForm()}
        {this.finalForm()}
        <button
          type="submit"
          onClick={this.submitMovie}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
