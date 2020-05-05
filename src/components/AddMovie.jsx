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

    this.updState = this.updState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  chamaNaRefatoracao(type, id, value, onChange) {
    this.chamaNaRefatoracao = this.chamaNaRefatoracao.bind(this);
    if (type === 'textarea') {
      return <textarea id={id} value={value} onChange={onChange} />;
    }
    return <input type={type} id={id} value={value} onChange={onChange} />;
  }

  updState(e) {
    this.setState(() => {
      this.state.title = e.target.value;
      this.state.subtitle = e.target.value;
      this.state.imagePath = e.target.value;
      this.state.storyline = e.target.value;
      this.state.rating = parseFloat(e.target.value);
      this.state.genre = e.target.value;
    });
  }

  handleClick() {
    this.props.onClick(this.state);
    this.setState(() => {
      this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          {this.chamaNaRefatoracao('text', 'title', this.state.title, this.updState)}
          <label htmlFor="subtitle">Subtítulo</label>
          {this.chamaNaRefatoracao('text', 'subtitle', this.state.subtitle, this.updState)}
          <label htmlFor="imagePath">Imagem</label>
          {this.chamaNaRefatoracao('text', 'imagePath', this.state.imagePath, this.updState)}
          <label htmlFor="storyline">Sinopse</label>
          {this.chamaNaRefatoracao('textarea', 'storyline', this.state.storyline, this.updState)}
          <label htmlFor="rating">Avaliação</label>
          {this.chamaNaRefatoracao('number', 'rating', this.state.rating, this.updState)}
          <label htmlFor="genre">Gênero</label>
          <select id="genre" value={this.state.genre} onChange={this.updState}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onClick={this.handleClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
