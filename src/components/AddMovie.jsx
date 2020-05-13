// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
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

    this.title = this.title.bind(this);
    this.subtitle = this.subtitle.bind(this);
    this.imagem = this.imagem.bind(this);
    this.sinopse = this.sinopse.bind(this);
    this.avaliaçao = this.avaliaçao.bind(this);
    this.mudaTitle = this.mudaTitle.bind(this);
    this.mudasubTitle = this.mudasubTitle.bind(this);
    this.mudaImage = this.mudaImage.bind(this);
    this.mudaSinopse = this.mudaSinopse.bind(this);
    this.mudaAvaliacao = this.mudaAvaliacao.bind(this);
    this.mudaGen = this.mudaGen.bind(this);
  }

  title() {
    return (
      <label htmlFor="title">
        Título
        <input type="text" value={this.state.title} onChange={this.mudaTitle} />
      </label>
    );
  }

  subtitle() {
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input type="text" value={this.state.subtitle} onChange={this.mudasubTitle} />
      </label>
    );
  }

  imagem() {
    return (
      <label htmlFor="imagem">
        Imagem
        <input type="text" value={this.state.imagePath} onChange={this.mudaImage} />
      </label>
    );
  }

  sinopse() {
    return (
      <label htmlFor="sinopse">
        Sinopse
        <textarea type="text" value={this.state.storyline} onChange={this.mudaSinopse} />
      </label>
    );
  }

  avaliaçao() {
    return (
      <label htmlFor="avaliaçao">
        Avaliação
        <input type="number" value={this.state.rating} onChange={this.mudaAvaliacao} />
      </label>
    );
  }

  mudaTitle(event) {
    const input = event.target;
    this.setState({ title: input.value });
  }

  mudasubTitle(event) {
    const input = event.target;
    this.setState({ subtitle: input.value });
  }

  mudaImage(event) {
    const input = event.target;
    this.setState({ imagePath: input.value });
  }

  mudaSinopse(event) {
    const input = event.target;
    this.setState({ storyline: input.value });
  }

  mudaAvaliacao(event) {
    const input = event.target;
    this.setState({ rating: Number(input.value) });
  }

  mudaGen(event) {
    const input = event.target;
    this.setState({ genre: input.value });
  }

  render() {
    return (
      <form>
        {this.title()}
        {this.subtitle()}
        {this.imagem()}
        {this.sinopse()}
        {this.avaliaçao()}
        <label htmlFor="gen">
          Gênero
          <select value={this.state.genre} onChange={this.mudaGen}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
