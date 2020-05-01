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
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSubtitle = this.onChangeSubtitle.bind(this);
    this.onChangeImagePath = this.onChangeImagePath.bind(this);
    this.onChangeStoryline = this.onChangeStoryline.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
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

  genreSelectOptions() {
    return (
      <select value={this.state.genre} onChange={this.onChangeGenre}>
        <option value={'action'}>Ação</option>
        <option value={'comedy'}>Comédia</option>
        <option value={'thriller'}>Suspense</option>
      </select>
    );
  }

  labelTitle() {
    return (
      <label htmlFor="title">
        Título
        <input type="text" value={this.state.title} onChange={this.onChangeTitle} />
      </label>
    );
  }

  labelSubtitle() {
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input type="text" value={this.state.subtitle} onChange={this.onChangeSubtitle} />
      </label>
    );
  }

  labelImagePath() {
    return (
      <label htmlFor="imagePath">
        Imagem
        <input type="text" value={this.state.imagePath} onChange={this.onChangeImagePath} />
      </label>
    );
  }

  labelStoryline() {
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea value={this.state.storyline} onChange={this.onChangeStoryline} />
      </label>
    );
  }

  labelRating() {
    return (
      <label htmlFor="rating">
        Avaliação
        <input type="number" value={this.state.rating} onChange={this.onChangeRating} />
      </label>
    );
  }

  labelGenre() {
    return (
      <label htmlFor="genre">
        Gênero
        {this.genreSelectOptions()}
      </label>
    );
  }

  buttonAdd() {
    return (
      <button type="button" onClick={() => this.addFilme(this.props.onClick)}>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form>
        {this.labelTitle()}
        {this.labelSubtitle()}
        {this.labelImagePath()}
        {this.labelStoryline()}
        {this.labelRating()}
        {this.labelGenre()}
        {this.buttonAdd()}
      </form>
    );
  }
}

export default AddMovie;
