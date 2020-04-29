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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const input = e.target;
    this.setState({
      ...this.state,
      [input.name]: input.value,
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({  });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>New Movie</legend>
            <div>
              <label htmlFor="title">
                Titulo
                <input
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Titulo"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="subtitle">
                Subtítulo
                <input
                  type="text"
                  name="subtitle"
                  value={subtitle}
                  placeholder="Subtitulo"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="imagePath">
                Imagem
                <input
                  type="text"
                  name="imagePath"
                  value={imagePath}
                  placeholder="Caminho da Imagem"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="storyline">
                Sinopse
                <textarea
                  type="text"
                  name="storyline"
                  value={storyline}
                  placeholder="Sinopse"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="rating">
                Avaliação
                <input
                  type="number"
                  name="rating"
                  value={rating}
                  placeholder="Avaliação"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="rating">
                Avaliação
                <select name="genre" value={genre} onChange={this.handleChange}>
                  <option value="action">Ação</option>
                  <option value="comedy">Comédia</option>
                  <option value="thriller">Suspense</option>
                </select>
              </label>
            </div>
            <div>
              <button type="submit" onClick={this.handleSubmit}>Adicionar Filme</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddMovie;
