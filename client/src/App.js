import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Habits from './components/Habits'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Habits />
    </div>
  );
}

export default App;
