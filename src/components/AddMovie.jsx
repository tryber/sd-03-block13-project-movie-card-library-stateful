import React, { Component } from 'react';

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
  }

  handleChange = (event, name) => {
    let { value } = event.target;

    if(name === 'rating') {
      this.setState({
        [name]: parseFloat(value)
      })
    } this.setState({
      [name]: value,
    })    
  };


  render() {
    // const { onClick } = this.props;
    return (
      <div>
        <form action=''>
          <label htmlFor="title" >Título</label>
          <input type="text" name="title" id="title" onChange={(event) => this.handleChange(event, 'title')} value={this.state.title}/>
          <label htmlFor="sub" >Subtítulo</label>
          <input type="text" name="subtitle" id="sub" onChange={(event) => this.handleChange(event, 'subtitle')} value={this.state.subtitle}/>
          <label htmlFor="img" >Imagem</label>
          <input type="text" alt="teste" name="image" id="img" onChange={(event) => this.handleChange(event, 'imagePath')} value={this.state.imagePath}/>
          <label htmlFor="sin" >Sinopse</label>
          <textarea type="text" name="storyline" id="sin" onChange={(event) => this.handleChange(event, 'storyline')} value={this.state.storyline}/>
        </form>
      </div>
    );
  }
}

export default AddMovie;
