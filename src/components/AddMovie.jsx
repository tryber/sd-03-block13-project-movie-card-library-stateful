import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChangeInput(event, stateElem) {
    const { value } = event.target;

    this.setState({ [stateElem]: (stateElem === 'rating' ? Number(value) : value) });
  }


  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    // event.preventDefault();
  }

  title() {
    const { title } = this.state;
    return (

      <div>
        <label htmlFor="title">
          Título
          <input
            type="text"
            onChange={(event) => this.handleChangeInput(event, 'title')}
            value={title}
          />
        </label>
      </div>
    );
  }

 
  render() {
    return (
      <form className="form-movie">
        {this.title()}
        <button type="button" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
