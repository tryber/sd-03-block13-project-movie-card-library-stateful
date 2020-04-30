// implement AddMovie component here
import React, { Component, useState } from 'react';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    }
    // const [ toMovie ] = useState();
  }
  
  handleChange = (event) => {
    console.log(event.target.value);
    // console.log(toMovie);
    
    
    this.setState({[event.target.name]: event.target.value})
  }
  
  myFunction = (event) => {
    event.preventDefault();
    console.log('estou no AddMovie. eu fui clicado, ass: Button', this.state);
    const fn = document.getElementById('')
    return <div>
      {this.state}
    </div>
    
  }
  
  
  render() {
    console.log('estou no AddMovie, este é o state: ', this.state);
    console.log('AddMovie props:', this.props);
    
    return (
      <div className="oi">
        <form className="" action="">
          <label htmlFor="title">Título</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <br/>
          <label htmlFor="subtitle">Subtítulo</label>
          <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} />
          <br/>
          <label htmlFor="imagem">Imagem</label>
          <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.handleChange} />
          <br/>

          <label htmlFor="storyLine">Sinopse</label>
          <textarea name="storyLine" value={this.state.storyLine} onChange={this.handleChange} id="storyLine" cols="30" rows="4"></textarea>

          <br/>
          <label htmlFor="rating">Avaliação</label>
          <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange} />
          <br/>

          <label htmlFor="genre">Gênero</label>
          <select name="genre" onChange={this.handleChange} value={this.state.genre} id="">
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button onClick={this.myFunction}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}