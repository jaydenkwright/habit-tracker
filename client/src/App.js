import React, { useState, useEffect } from "react";
import './App.css';
import Habits from './components/Habits'
import Login from './components/Login'
import Context from './Context/Context'
import Loading from './components/Loading'
import axios from 'axios'

function App() {
  const [loginToken, setLoginToken] = useState('')
  const [habitData, setHabitData] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(undefined)
  const [newHabitData, setNewHabitData] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/habits', {'withCredentials':true})
    .then((response) => {
      setLoggedIn(true)
        console.log(response)
        setHabitData(response.data)
    }, (error) => {
        console.log(error);
        if(error){
            setLoggedIn(false)
        }
    });
}, [isLoggedIn, newHabitData])

  console.log(newHabitData)
  console.log(isLoggedIn)
  return (
    <div className="App">
      <Context.Provider value={{habits: habitData}}>
        {isLoggedIn === true ? <Habits setLoggedIn={setLoggedIn} setNewHabitData={setNewHabitData}/> : isLoggedIn === false ? <Login setLoggedIn={setLoggedIn}/> : <Loading />}
      </Context.Provider>
    </div>
  );
}

export default App;