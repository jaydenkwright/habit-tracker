import React, { useState, useEffect } from "react";
import styles from './Habits.module.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Context from '../Context/Context'
import AddHabit from './AddHabit'
import Habit from './Habit'
import MarkComplete from './MarkComplete'
import moment from 'moment'
import axios from 'axios'

function Habits (props){       
    const [addHabitVisisble, setAddHabitVisible] = useState(false)
    const [showHabit, toggleHabit] = useState(false)
    const [habitId, setHabitId] = useState('')
    const [date, setDate] = useState(new Date())
    const [habitData, setHabitData] = useState([])


    const loadHabit = (id) => {
        toggleHabit(true)
        setHabitId(id)
    }
    const toggleAddHabit = () => {
        setAddHabitVisible(!addHabitVisisble)
    }
    const completeHabit = (id) => {
        axios.post('http://localhost:5000/api/completed/', {
            habitId: id,
            completed: true
        })
            .then((response) => {
                console.log(response);

            }, (error) => {
                console.log(error);
            });
    }
    const deleteHabit = (id) => {
        axios.delete(`http://localhost:5000/api/habits/${id}`)
            .then((response) => {
                console.log(response);

            }, (error) => {
                console.log(error);
            });
    }


        return (
            <div>
                <h1 className={styles.title}>Today</h1>
                <h1 className={styles.dayOfWeek}>{ moment().format("ddd") }</h1>
                <h1 className={styles.date}>{ moment().format("MMM D YYYY") }</h1>
                <Context.Consumer>
                    {context => 
                    showHabit === false ?
                        <div>
                            <div>
                                <IconButton>
                                    <Icon onClick={toggleAddHabit} style={{ color: green[500] }}>add_circle</Icon>
                                </IconButton>
                            </div>
                        {addHabitVisisble === true ? <AddHabit /> : ''}    
                        {
                            context.habits.map((habit) => (
                                <Card style={{ backgroundColor: "#424242" }} className={styles.card}>
                                    <CardContent>
                                        <div className={styles.delete} onClick={() => deleteHabit(habit._id)}>
                                            x
                                        </div>
                                        <div className={styles.habitTitle} onClick={() => loadHabit(habit._id)}>
                                            {habit.title}
                                        </div>
                                        <MarkComplete id={habit._id} date={date}/>
                                        <Typography variant="h5" color="" className={styles.description} onClick={() => loadHabit(habit._id)}>
                                        {habit.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))
                        }
                        </div>
                        : <Habit id={habitId}/>
                    } 
                </Context.Consumer>
            </div>
        )
    }

export default Habits
