import React from 'react';
import Data from './data.js'
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import Footer from './components/Footer.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={Data} />
      <Footer />
    </div>
  );
}

export default App;
