import React, { useState, useEffect } from "react";
import './App.css';
import Habits from './components/Habits'
import Context from './Context/Context'
import axios from 'axios'

function App() {
  const [habitData, setHabitData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/habits', {headers: {'login-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzY4ZjJjNDVmMGI1YWQ0ZDljN2EzMCIsImlhdCI6MTU4NDgzMjk5MH0.SoiHiVYqjq1LjO8J8iflWcPMGKekAbSri-9UCWCQeZQ'}})
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
