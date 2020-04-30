import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieData from './data';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={MovieData} />
    </div>
  );
}

export default App;
