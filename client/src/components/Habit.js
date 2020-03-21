import React, { useState, useEffect } from "react";
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Habit.module.css'

export default function Habit(props) {
    const d = new Date()
    const [habit, setHabit] = useState([])
    const [date, setDate] = useState(d.toISOString())
    const [complete, setComplete] = useState([])
    const [completedState, setComp] = useState('')
    console.log(date)
    useEffect(() => {
        axios.get(`http://localhost:5000/api/habits/${props.id}`)
          .then((response) => {
            console.log(response)
            setHabit(response.data)
          })
      }, [])
      useEffect(() => {
        axios.get(`http://localhost:5000/api/completed/${props.id}/${date}`)
        .then((response) => {
            console.log(response.data[0])
            if(response.data[0]){
                setComplete(response.data)
                console.log(complete)
            }
      })
      }, [])
      const card = {
        marginTop: "1em",
        padding: ".3em",
        width: "70%",
        display: "inline-block",
        backgroundColor: "#424242",
        textAlign: "left"
    }
    return (
        <div>
            <Card style={card}>
                <CardContent>
                    <div className={styles.title}>
                        {habit.title}
                    </div>
                    {complete.map((comp) => (
                        <div className={comp && comp.completed === true ? styles.completed : styles.notCompleted}>.</div>
                    ))}
                    <Typography variant="h5" className={styles.description}>
                        {habit.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
