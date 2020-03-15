import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar'
import Habits from './components/Habits'
import AddHabit from './components/AddHabit'
import Context from './Context/Context'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import moment from 'moment'

function App() {
  const start = moment(new Date('2020-03-06T01:56:44.202Z')).startOf("day")
  const end = moment().endOf("day")
  console.log(start)
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
