import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    }
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubtitle = this.changeSubtitle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeStoryline = this.changeStoryline.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.buttonAction = this.buttonAction.bind(this);
  }

  changeTitle(event) {
    const input = event.target
    this.setState({
      title: input.value,
    })
  }

  changeSubtitle(event) {
    const input = event.target
    this.setState({
      subtitle: input.value,
    })
  }

  changeImage(event) {
    const input = event.target
    this.setState({
      imagePath: input.value,
    })
  }

  changeStoryline(event) {
    const input = event.target
    this.setState({
      storyline: input.value,
    })
  }

  changeRating(event) {
    const input = event.target
    this.setState({
      rating: Number(input.value),
    })
  }

  changeGenre(event) {
    const input = event.target
    this.setState({
      genre: input.value,
    })
  }

  buttonAction(event) {
    this.props.onClick(this.state)
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    })
  }

  render() {
    return (
        <form>
            <label>Título</label>
            <input value={this.state.title} onChange={this.changeTitle} type="text" />
            <label>Subtítulo</label>
            <input value={this.state.subtitle} onChange={this.changeSubtitle} type="text" />
            <label>Imagem</label>
            <input value={this.state.imagePath} onChange={this.changeImage} type="text" />
            <label>Sinopse</label>
            <textarea value={this.state.storyline} onChange={this.changeStoryline}></textarea>
            <label>Avaliação</label>
            <input value={this.state.rating} onChange={this.changeRating} type="number" />
            <label>Gênero</label>
            <select value={this.state.genre} onChange={this.changeGenre} >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
            <button onClick={this.buttonAction}>Adicionar filme</button>
        </form>
    );
  }
}

export default AddMovie;
