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
            if(response.data[0]){
                setComplete(response.data[0].completed)
                console.log(complete)
            }
      })
      }, [])
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.habit}>
                    <Card style={{ backgroundColor: "#424242" }} className={styles.card}>
                        <CardContent>
                            <div className={styles.title}>
                                {habit.title}
                            </div>
                                <div className={complete && complete === true ? styles.completed : styles.notCompleted}>.</div>
                            <Typography variant="h5" className={styles.description}>
                                {habit.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
