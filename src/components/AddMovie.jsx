// implement AddMovie component here
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
      genre: 'action'
    };

    this.textStatusHandler = this.textStatusHandler.bind(this);
  }

  textStatusHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    const { onClick } = this.props;
    return (
      <form>
        <fieldset className="formRegister">
          <legend>Cadastro de filmes</legend>
          <div>
            <label htmlFor="text">Título</label>
            <input type="text" onChange={this.textStatusHandler} value={this.state.title}/>
          </div>
          <div>
            <label htmlFor="text">Subtítulo</label>
            <input type="text" onChange={this.textStatusHandler} value={this.state.subtitle}/>
          </div>
          <div>
            <label htmlFor="text">Imagem</label>
            <input type="text" onChange={this.textStatusHandler} value={this.state.imagePath}/>
            <input type="file" name="selectFile" onChange={this.textStatusHandler}/>
          </div>
          <div>
            <label htmlFor="text">Sinopse</label>
            <input type="text" onChange={this.textStatusHandler} value={this.state.storyLine}/>
          </div>
          <div>
            <label htmlFor="number">Avaliação</label>
            <input type="number" maxLength="1" onChange={this.textStatusHandler}
            value={this.state.rating}
            />
          </div>
          <div>
            <label htmlFor="select">Gênero</label>
            <select onChange={this.textStatusHandler} value={this.state.genre}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </div>
          <button type="submit" onClick={() => {onclick(this.state)}}>Adicionar filme</button>
        </fieldset>
      </form>
    );
  }
}

export default AddMovie;