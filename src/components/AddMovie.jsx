import React from 'react';

const initialState = {
  genre: 'action',
  imagePath: '',
  rating: 0,
  storyline: '',
  subtitle: '',
  title: '',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange({ target: { name, value } }) {
    // console.log('###################################################', name);
    this.setState({ [name]: value })
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    return (
      <form>
        <label>Título
          <input
            name={'title'}
            onChange={this.handleChange}
            type={'text'}
            value={title}
          />
        </label>
        <label>Subtítulo
          <input
            name={'subtitle'}
            onChange={this.handleChange}
            type={'text'}
            value={subtitle}
          />
        </label>
        <label>Imagem
          <input
            name={'imagePath'}
            onChange={this.handleChange}
            type={'text'}
            value={imagePath}
          />
        </label>
        <label>
          <textarea
            name={'storyline'}
            onChange={this.handleChange}
            value={storyline}
          >Sinopse</textarea>
        </label>
        <label>Avaliação
          <input
            name={'rating'}
            onChange={this.handleChange}
            type={'number'}
            value={rating}
          />
        </label>
        <label>Gênero
          <select
            name={'genre'}
            onChange={this.handleChange}
            value={genre}
          >
            <option value={'action'}>Ação</option>
            <option value={'comedy'}>Comédia</option>
            <option value={'thriller'}>Suspense</option>
          </select>

          <button type={'submit'} onClick={() => { this.props.onClick(this.state); this.reset() }}>
          Adicionar filme</button>
        </label>
      </form>
    );
  }
}