// implement AddMovie component here
import React from 'react';
import movies from '../data.js'

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };

    this.genericStatusHandler = this.genericStatusHandler.bind(this);

  }

  genericStatusHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  addMovie() {
    { movies.append(this.state) };
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Cadastro de filmes</legend>
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              name="title"
              onChange={this.genericStatusHandler}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="subtitle">Subtítulo</label>
            <input
              type="text"
              name="subtitle"
              onChange={this.genericStatusHandler}
              value={this.state.subtitle}
            />
          </div>
          <div>
            <label htmlFor="imagePath">Imagem</label>
            <input
              type="text"
              name="imagePath"
              onChange={this.genericStatusHandler}
              value={this.state.imagePath}
            />
            <input type="file" name="selectFile" onChange={this.genericStatusHandler}/>
          </div>
          <div>
            <label htmlFor="storyLine">Sinopse</label>
            <input
              type="text"
              name="storyLine"
              onChange={this.genericStatusHandler}
              value={this.state.storyLine}
            />
          </div>
          <div>
            <label htmlFor="rating">Avaliação</label>
            <input
              type="number"
              maxLength="1"
              name="rating"
              onChange={this.genericStatusHandler}
              value={this.state.rating}
            />
          </div>
          <div>
            <label htmlFor="genre">Gênero</label>
            <select
              name="genre"
              onChange={this.genericStatusHandler}
              value={this.state.genre} >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </div>
          <button type="submit" onClick={this.addMovie}>Adicionar filme</button>
        </fieldset>
      </form>
    );
  }
}

export default AddMovie;