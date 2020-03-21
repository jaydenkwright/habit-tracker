import React, { useState, useEffect } from "react";
import './App.css';
import Habits from './components/Habits'
import Context from './Context/Context'
import axios from 'axios'

function App() {
  const [habitData, setHabitData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/habits')
      .then((response) => {
        setHabitData(response.data)
      })
  }, [])

  console.log(habitData)
  return (
    <div className="App">
      <Context.Provider value={{habits: habitData}}>
        <Habits />
      </Context.Provider>
    </div>
  );
}

export default App;
