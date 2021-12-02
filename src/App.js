import logo from './logo.svg';
import NavBar from './components/navBar';
import SongList from './components/songList';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <NavBar />
      <main className="container">
        <SongList />
      </main>
    </React.Fragment>
  );
}

console.log("app js");

export default App;
