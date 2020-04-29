import React from './react'

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: 'action'
    }
  }

  onChangeTitle = (event) => this.setState({ title: event.target.value });

  onChangeSubtitle = (event) => this.setState({subtitle: event.target.value});

  onChangeImagePath = (event) => this.setState({imagePath: event.target.value});

  render() {
    const onClick = this.props.onClick;
    return (
      <form>
        <label>
          Título
          <input type="text" value={this.state.title} onChange={this.onChangeTitle}></input>
        </label>
        <label>
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.onChangeSubtitle}></input>
        </label>
        <label>
          Imagem
          <input type="text" value={this.state.imagePath} onChange={this.onChangeImagePath}></input>
        </label>
      </form>
    );
  }
}

export default AddMovie;
