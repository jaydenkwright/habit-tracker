import React, { useState, useEffect } from "react";
import styles from './Habits.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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


function Habits (){
    const habitTitle = {
        fontSize: "36px",
        textAlign: "left",
        color: "#eceff1",
    }
    
    const card = {
        marginTop: "1em",
        padding: ".3em",
        width: "70%",
        display: "inline-block",
        backgroundColor: "#424242",
        textAlign: "left"
    }
    
    const description = {
        color: "#bdbdbd",
        fontSize: "24px",
        paddingTop: ".4em",
        paddingLeft: ".3em"
    }
    
    const essential = {
        backgroundColor: "#f44336",
        width: "2em",
        height: "1em",
        color: "#f44336",
        border: "none",
        outline: "none"
    }
    
    const lifestyle = {
        backgroundColor: "#43a047",
        width: "2em",
        height: "1em",
        color: "#43a047"
    }
    
    const work = {
        backgroundColor: "#2196f3",
        width: "2em",
        height: "1em",
        color: "#2196f3"
    }
    
    const [addHabitVisisble, setAddHabitVisible] = useState(false)
    const [showHabit, toggleHabit] = useState(false)
    const [habitId, setHabitId] = useState('')
    const [date, setDate] = useState(new Date())
    const loadHabit = (id) => {
        toggleHabit(true)
        setHabitId(id)
    }
    const toggleAddHabit = () => {
        setAddHabitVisible(!addHabitVisisble)
        console.log(addHabitVisisble)
    }
    const completeHabit = (id) => {
        console.log(id)
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
                                <Card style={card}>
                                    <CardContent>
                                        <div style={habitTitle} onClick={() => loadHabit(habit._id)}>
                                            {habit.title}
                                        </div>
                                        <MarkComplete id={habit._id} date={date}/>
                                        <Typography variant="h5" color="" style={description} onClick={() => loadHabit(habit._id)}>
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
