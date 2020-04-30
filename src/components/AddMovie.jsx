// implement AddMovie component here
import React, { Component } from 'react'
import MovieList from './MovieList'


export default class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: "",
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action'
        }

    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    } 
    render() {
        const addmovie = () => {
            onClick(this.state)
            this.setState({
                subtitle: "",
                title: '',
                imagePath: '',
                storyline: '',
                rating: 0,
                genre: 'action'
            });
        }
        const { onClick } = this.props
        const { title, subtitle, imagePath, storyline, rating, genre } = this.state
        return (
            <div>
              <label>Título
                  <input type="text" name="title" value={title} onChange={this.handleChange}/>
              </label>
              <label>Subtítulo
                  <input type="text" name="subtitle" value={subtitle} onChange={this.handleChange}/>
              </label>
              <label>ImagePath
                  <input type="text" name="imagePath" value={imagePath} onChange={this.handleChange}/>
              </label>
              <label>Sinopse
                  <textarea type="text" name="storyline" value={storyline} onChange={this.handleChange}/>
              </label>
              <label>Avaliação
                  <input type="number" name="rating" value={rating} onChange={this.handleChange}/>
              </label>
              <select name="genre" value={genre}>Gênero
                  <option value="action">Ação</option>
                  <option value="comedy">Comédia</option>
                  <option value="thriller">Suspense</option>
              </select>
              <button onClick={addmovie}>Adicionar Filme</button>
            </div>
        )
    }
}
