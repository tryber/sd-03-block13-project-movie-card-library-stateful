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
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  onChangeImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  onChangeStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  onChangeRating(event) {
    this.setState({ rating: event.target.value });
  }

  onChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  addFilme(onClick) {
    let filme = this.state;
    onClick(filme);
    filme = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  genreSelectOptions() {
    return (
      <select value={this.state.genre} onChange={this.onChangeGenre}>
        <option value={'action'}>Ação</option>
        <option value={'comedy'}>Comédia</option>
        <option value={'thriller'}>Suspense</option>
      </select>
    );
  }

  formAddMovie() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" value={this.state.title} onChange={this.onChangeTitle} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.onChangeSubtitle} />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input type="text" value={this.state.imagePath} onChange={this.onChangeImagePath} />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea value={this.state.storyline} onChange={this.onChangeStoryline} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" value={this.state.rating} onChange={this.onChangeRating} />
        </label>
        <label htmlFor="genre">
          Gênero
          {this.genreSelectOptions()}
        </label>
        <button onClick={() => this.addFilme(this.props.onClick)}>Adicionar filme</button>
      </form>
    );
  }

  render() {
    return this.formAddMovie();
  }
}

export default AddMovie;
