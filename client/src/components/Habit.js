import React, { useState, useEffect } from "react";
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './Habit.module.css'
import History from './History'
import MarkComplete from './MarkComplete'
import Chart from './Chart'

export default function Habit(props) {
    const d = new Date()
    const [habit, setHabit] = useState([])
    const [date, setDate] = useState(d.toISOString())
    const [complete, setComplete] = useState([])
    const [completions, setCompletions] = useState([])
    const [historyUpdate, setHistoryUpdate] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/habits/${props.id}`)
          .then((response) => {
            setHabit(response.data)
          })
      }, [])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/completed/${props.id}/${date}`)
        .then((response) => {
            if(response.data[0]){
                setComplete(response.data[0].completed)
            }
        })
      }, [])
      useEffect(() => {
        axios.get(`http://localhost:5000/api/completed/${props.id}/`)
        .then((response) => {
            if(response.data){
                setCompletions(response.data)
            }
        })
      }, [historyUpdate])


    return (
        <div>
            <div className={styles.main}>
                <div className={styles.habit}>
                    <Card style={{ backgroundColor: "#424242" }} className={styles.card}>
                        <CardContent>
                            <div className={styles.title}>
                                {habit.title}
                            </div>
                            <MarkComplete id={props.id} date={d} setHistoryUpdate={setHistoryUpdate}/>
                            <Typography variant="h5" className={styles.description}>
                                {habit.description}
                            </Typography>
                            <Chart completions={habit.completions} startDate={habit.date}/>
                            <History completionData={completions}/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
