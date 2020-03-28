import React, { useState, useEffect } from "react";
import './App.css';
import Habits from './components/Habits'
import Home from './components/Home'
import Context from './Context/Context'
import Loading from './components/Loading'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [habitData, setHabitData] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(undefined)
  const [newHabitData, setNewHabitData] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/habits', {'withCredentials':true})
    .then((response) => {
      setLoggedIn(true)
        setHabitData(response.data)
    }, (error) => {
        console.log(error);
        if(error){
            setLoggedIn(false)
        }
    });
}, [isLoggedIn, newHabitData])

  return (
    <div className="App">
      <Context.Provider value={{habits: habitData}}>
        {isLoggedIn === true ? <Habits setLoggedIn={setLoggedIn} setNewHabitData={setNewHabitData}/> : isLoggedIn === false ? <Home setLoggedIn={setLoggedIn}/> : <Loading />}
      </Context.Provider>
      <Footer isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  );
}

export default App;