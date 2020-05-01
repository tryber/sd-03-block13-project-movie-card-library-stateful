import React, { Component } from 'react';

export class AddMovie extends Component {
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
  }

  changeHandler = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form action=''>
          <label htmlFor="title" >Título</label>
          <input type="text" name="title" id="title" onChange={this.changeHandler} value={this.state.title}/>
          {/* <label htmlFor="sub" >Subtítulo</label>
          <input type="text" name="subtitle" id="sub" onChange={this.update} value={this.state.subtitle}/> */}
        </form>
      </div>
    );
  }
}

export default AddMovie;
