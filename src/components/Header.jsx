import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.c = <h1 className="page-title">Movie Cards Library</h1>;
    this.f = 4;
    console.log(this);
    this.user = {
      firstName: 'Harper',
      lastName: 'Perez',
    };
 
  }


  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
