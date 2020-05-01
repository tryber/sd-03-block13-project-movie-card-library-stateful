import React, { Component } from 'react';
import Genre from './genreData';

const initialState = {
  genre: 'action',
  imagePath: '',
  rating: 0,
  storyline: '',
  subtitle: '',
  title: '',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleChange(name) {
    return ({ target: { value } }) => {
      const nextState = {};
      if (name === 'rating') nextState[name] = Number(value);
      else nextState[name] = value;
      this.setState(nextState);
    };
  }

  reset() { this.setState(initialState); }

  handleSubmitClick(event) {
    if (event && event.preventDefault) event.preventDefault();
    this.props.onClick(this.state);
    this.reset();
  }


  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title" onChange={this.handleChange('title')} value={this.state.title} /><br />
          <label htmlFor="sub">Subtítulo</label>
          <input type="text" name="subtitle" id="sub" onChange={this.handleChange('subtitle')} value={this.state.subtitle} />
          <br />
          <label htmlFor="img">Imagem</label>
          <input type="text" alt="teste" name="image" id="img" onChange={this.handleChange('imagePath')} value={this.state.imagePath} />
          <br />
          <label htmlFor="sin">Sinopse</label>
          <textarea type="textarea" name="storyline" id="sin" onChange={this.handleChange('storyline')} value={this.state.storyline} />
          <br />
          <label htmlFor="rat">Avaliação</label>
          <input type="number" name="storyline" id="rat" onChange={this.handleChange('rating')} value={this.state.rating} />
          <br />
          <label htmlFor="gen">Gênero</label>
          <select id="gen" onChange={this.handleChange('genre')} value={this.state.genre}>
            {Genre.slice(1, 4).map((e) => <option key={e.text} value={e.value}>{e.text}</option>)}
          </select>
          <button type={'submit'} onClick={this.handleSubmitClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
