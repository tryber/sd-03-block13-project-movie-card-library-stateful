// implement AddMovie component here
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
    this.stateUpdateHandler = this.stateUpdateHandler.bind(this);
    this.firstFormsInputs = this.firstFormsInputs.bind(this);
    this.secondFormsInputs = this.secondFormsInputs.bind(this);
  }

  stateUpdateHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  firstFormsInputs() {
    return (
      <div>
        <label htmlFor="title">
          Título
          <input
            type="text" name="title" id="title" value={this.state.title}
            onChange={this.stateUpdateHandler}
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text" name="subtitle" id="subtitle"
            value={this.state.subtitle} onChange={this.stateUpdateHandler}
          />
        </label>
      </div>
    );
  }

  secondFormsInputs() {
    return (
      <div>
        <label htmlFor="movie-image">
          <input
            type="file" name="movie-image" id="movie-image" value={this.state.imagePath}
            onChange={this.stateUpdateHandler}
          />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            type="text" id="storyline" name="storyline" rows="4" cols="50"
            value={this.state.storyline} onChange={this.stateUpdateHandler}
          />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number" name="rating" id="rating" value={this.state.rating}
            onChange={this.stateUpdateHandler}
          />
        </label>
      </div>
    );
  }

  render() {
    const { genre } = this.state;
    return (
      <div>
        <form>
          {this.firstFormsInputs()}
          {this.secondFormsInputs()}
          <label htmlFor="genre">
            <select
              name="genre"
              id="genre"
              value={genre}
              onChange={this.stateUpdateHandler}
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button type="button" onClick={this.stateUpdateHandler}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
