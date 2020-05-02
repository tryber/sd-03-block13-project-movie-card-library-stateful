// implement AddMovie component here
import React, { Component } from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  onChangeHandler(event, type) {
    const { value } = event.target;
    if (type === 'rating') { this.setState({ [type]: +value }); } else this.setState({ [type]: value });
  }

  reset() {
    this.setState(initialState);
  }

  createInput(inputName, text, inputType = 'text') {
    const stat = this.state;
    return (
      <label htmlFor={inputName}>
        {text}
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          value={stat[inputName]}
          onChange={(e) => this.onChangeHandler(e, inputName)}
        />
      </label>
    );
  }

  render() {
    const arraySelect = ['Ação', 'Comédia', 'Suspense'];
    const arrayVal = ['action', 'comedy', 'thriller'];
    const detructuring = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form id="form1">
          {this.createInput('title', 'Título')}
          {this.createInput('subtitle', 'Subtítulo')}
          {this.createInput('imagePath', 'Imagem')}
          <label htmlFor="input">
          Sinopse
            <textarea value={detructuring.storyline} onChange={(e) => this.onChangeHandler(e, 'storyline')} />
          </label>
          {this.createInput('rating', 'Avaliação', 'number', this.handleChangeRating)}
          <label htmlFor="Gênero">
          Gênero
            <select value={detructuring.genre} onChange={(e) => this.onChangeHandler(e, 'genre')}>
              {arraySelect.map((el, index) => (
                <option value={arrayVal[index]}>
                  {el}
                </option>
              ))}
            </select>
          </label>
          <button type="button" value="Adicionar filme" onClick={() => { onClick(this.state); this.reset(); }}>
        Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
