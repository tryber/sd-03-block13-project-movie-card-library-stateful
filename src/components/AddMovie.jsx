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
      genre: "action",
    };
    this.changeStateTitle = this.changeStateTitle.bind(this);
    this.changeStateSubt = this.changeStateSubt.bind(this);
    this.changeStateImg = this.changeStateImg.bind(this);
    this.changeStateStoryline = this.changeStateStoryline.bind(this);
    this.changeStateRate = this.changeStateRate.bind(this);
    this.changeStateGenre = this.changeStateGenre.bind(this);
    this.resetSt = this.resetSt.bind(this);
  }
  changeStateTitle(event) {
    const titleInput = event.target;
    this.setState({ title: titleInput.value });
  }
  changeStateSubt(event) {
    const subtInput = event.target;
    this.setState({ subtitle: subtInput.value });
  }
  changeStateImg(event) {
    const imageInput = event.target;
    this.setState({ imagePath: imageInput.value });
  }
  changeStateStoryline(event) {
    const storylineInput = event.target;
    this.setState({ storyline: storylineInput.value });
  }
  changeStateRate(event) {
    const ratingInput = event.target;
    this.setState({ rating: Number(ratingInput.value) });
  }
  changeStateGenre(event) {
    const genreInput = event.target;
    this.setState({ genre: genreInput.value });
  }
  resetSt() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }
  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="Titulo">Título</label>
        <input id="Titulo" type="text" value={this.state.title} onChange={this.changeStateTitle} />
        <label htmlFor="Subt">Subtítulo</label>
        <input id="Subt" type="text" value={this.state.subtitle} onChange={this.changeStateSubt} />
        <label htmlFor="Img">Imagem</label>
        <input id="Img" type="text" value={this.state.imagePath} onChange={this.changeStateImg} />
        <label htmlFor="Sinopse">Sinopse</label>
        <textarea id="Sinopse" value={this.state.storyline} onChange={this.changeStateStoryline} />
        <label htmlFor="Rate">Avaliação</label>
        <input id="Rate" type="number" value={this.state.rating} onChange={this.changeStateRate} />
        <label htmlFor="Genre">Gênero</label>
        <select value={this.state.genre} onChange={this.changeStateGenre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="submit" onClick={onClick(this.state), this.resetSt}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
