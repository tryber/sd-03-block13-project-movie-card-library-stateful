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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state
    return (
      <form>
        <label htmlFor='title'>Título</label> <input name='title' type='text' value={title}
        onChange={(e) => this.setState({ title: e.target.value })}></input>
        <label htmlFor='subtitle'>Subtítulo</label>
        <input name='subtitle' type='text' value={subtitle}
        onChange={(e) => this.setState({ subtitle: e.target.value })}></input>
        <label htmlFor='imagePath'>Imagem</label> 
        <input name='imagePath' type='text' value={imagePath}
        onChange={(e) => this.setState({ imagePath: e.target.value })}></input>
        <label htmlFor='storyline'>Sinopse</label> <textarea name='storyline' value={storyline}
        onChange={(e) => this.setState({ storyline: e.target.value })}></textarea>
        <label htmlFor='rating'>Avaliação</label> <input name='rating' type='number' value={rating}
        onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })}></input>
        <label htmlFor='genre'>Gênero</label>
        <select value={genre} onChange={(e) => this.setState({ genre: e.target.value })}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={() => { this.props.onClick(this.state); this.setState(reset);}
        }>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
