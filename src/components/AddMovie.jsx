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
    this.setState({ [input.name]: input.value });
  }

  handleSubmit(e) {
    e.preventDefault();
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

  firstlabels() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <label htmlFor="input">
          Título
          <input type="text" value={title} name="title" onChange={this.handleChange} />
        </label>
        <label htmlFor="input">
          Subtítulo
          <input type="text" value={subtitle} name="subtitle" onChange={this.handleChange} />
        </label>
        <label htmlFor="input">
          Imagem
          <input type="text" value={imagePath} name="imagePath" onChange={this.handleChange} />
        </label>
      </div>
    );
  }

  morelabels() {
    const { storyline, rating } = this.state;
    return (
      <div>
        <label htmlFor="input">
          Sinopse
          <textarea value={storyline} name="storyline" onChange={this.handleChange} />
        </label>
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
      </div>
    );
  }

  render() {
    const { genre } = this.state;
    return (
      <div>
        <form>
          {this.firstlabels()}
          {this.morelabels()}
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
        </form>
      </div>
    );
  }
}

export default AddMovie;
