import React from 'react';

const reset = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render () {
    return (
      <form>
        <label htmlFor='title'>Título</label>
        <input name='title' type='text' 
        onChange={(e) => this.setState({ title: e.target.value })} 
        value={this.state.title}>
        </input>

        <br />

        <label htmlFor='subtitle'>Subtítulo</label>
        <input name='subtitle' type='text' 
        onChange={(e) => this.setState({ subtitle: e.target.value })} 
        value={this.state.subtitle}>
        </input>

        <br />

        <label htmlFor='imagePath'>Imagem</label>
        <input name='imagePath' type='text' 
        onChange={(e) => this.setState({ imagePath: e.target.value })} 
        value={this.state.imagePath}>
        </input>

        <br />


        <label htmlFor='storyline'>Sinopse</label>
        <textarea name='storyline' 
        onChange={(e) => this.setState({ storyline: e.target.value })} 
        value={this.state.storyline}>
        </textarea>

        <br />

        <label htmlFor='rating'>Avaliação</label>
        <input name='rating' type='number'
        onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })}
        value={this.state.rating}>
        </input>

        <br />

        <label htmlFor='genre'>Gênero</label>
        <select value={this.state.genre} 
        onChange={(e) => this.setState({ genre: e.target.value })}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

        <br />

        <button onClick={() => {
          this.props.onClick(this.state)
          this.setState(reset)
          }}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
