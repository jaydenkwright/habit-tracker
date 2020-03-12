import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar'
import Habits from './components/Habits'
import AddHabit from './components/AddHabit'
import Context from './Context/Context'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
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
      <Context.Provider value={{habits: habitData, setHabit: setHabitData}}>
        <Habits />
      </Context.Provider>
    </div>
  );
}

export default App;
