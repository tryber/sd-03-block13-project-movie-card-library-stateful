import React from 'react';
import MovieList from './components/MovieList';
import Data from './data';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={Data} />
    </div>
  );
}

export default App;
