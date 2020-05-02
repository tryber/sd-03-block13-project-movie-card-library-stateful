import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.hadleChange = this.hadleChange.bind(this);
    this.clickMe = this.clickMe.bind(this);
  }

  hadleChange(event, state) {
    const { value } = event.target;
    this.setState({ [state]: (state === 'rating' ? Number(value) : value) });
  }

  clickMe() {
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

  creatInput(name, text, type, value) {
    return (
      <label htmlFor={text}>
        {text}
        <input
          type={type}
          value={value}
          onChange={(event) => this.hadleChange(event, name)}
          name={name}
        />
      </label>
    );
  }

  creatTextarea(name, text, type, value) {
    return (
      <label htmlFor={text}>
        {text}
        <textarea
          type={type}
          value={value}
          onChange={(event) => this.hadleChange(event, name)}
          name={name}
        />
      </label>
    );
  }
  // ((event) => this.setState({ name: event.target.value }))

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {this.creatInput('title', 'Título', 'text', title)}
        {this.creatInput('subtitle', 'Subtítulo', 'text', subtitle)}
        {this.creatInput('imagePath', 'Imagem', 'text', imagePath)}
        {this.creatTextarea('storyline', 'Sinopse', 'text', storyline)}
        {this.creatInput('rating', 'Avaliação', 'number', rating)}
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={genre} onChange={(event) => this.hadleChange(event, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            {/* <option valor="romance">Romance</option> */}
          </select>
        </label>
        <button onClick={this.clickMe} type="button">Adicionar filme</button>
      </form>
    );
  }
}


export default AddMovie;
