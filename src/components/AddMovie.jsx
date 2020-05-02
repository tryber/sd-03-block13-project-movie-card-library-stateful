import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChangeInput(event, stateElem) {
    const { value } = event.target;

    this.setState({ [stateElem]: (stateElem === 'rating' ? Number(value) : value) });
  }


  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  title() {
    const { title } = this.state;
    return (

      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'title')}
            value={title}
          />
        </label>
      </div>
    );
  }

  subtitle() {
    const { subtitle } = this.state;
    return (

      <div>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'subtitle')}
            value={subtitle}
          />
        </label>
      </div>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (

      <div>
        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'imagePath')}
            value={imagePath}
          />
        </label>
      </div>
    );
  }

  storyline() {
    const { storyline } = this.state;
    return (

      <div>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'storyline')}
            value={storyline}
          />
        </label>
      </div>
    );
  }

  rating() {
    const { rating } = this.state;
    return (

      <div>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            onChange={(event) => this.handleChangeInput(event, 'rating')}
            value={rating}
          />
        </label>
      </div>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="genre">
          Gênero
          <select
            value={genre}
            onChange={(event) => this.handleChangeInput(event, 'genre')}
            name="genre"
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="form-movie">
        {this.title()}
        {this.subtitle()}
        {this.imagePath()}
        {this.storyline()}
        {this.rating()}
        {this.genre()}
        <button type="submit" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
