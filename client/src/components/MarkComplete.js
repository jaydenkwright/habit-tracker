import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from './MarkComplete.module.css'

export default function MarkComplete(props) {
    const [complete, setCompleted] = useState('')
    const [newUpdate, setNewUpdate] = useState('')
    const [completionId, setCompletionId] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/api/completed/${props.id}/${props.date}`)
        .then((response) => {
            if(response.data[0]){
                console.log(response.data[0])
                setCompleted(response.data[0].completed)
                setCompletionId(response.data[0]._id)
                setNewUpdate(true)
                console.log(complete.completed)
            }else{
                setCompleted('')
                setNewUpdate(false)
            }
      })
    }, [])
    const completeHabit = (id) => {
        setCompleted(!complete)
        console.log(complete)
        if(!newUpdate){
            console.log('posted')
            axios.post('http://localhost:5000/api/completed/', {
                habitId: props.id,
                completed: true
            })
                .then((response) => {
                    console.log(response);
                    setCompletionId(response.data._id)
                    
                }, (error) => {
                    console.log(error);
                });
            setNewUpdate(true)
            axios.patch(`http://localhost:5000/api/habits/increase/${props.id}`)
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error);
                });
        }else{
            axios.patch(`http://localhost:5000/api/completed/${completionId}`, 
            { 
                completed: !complete 
            })
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error);
                });
            if(complete === true){
                axios.patch(`http://localhost:5000/api/habits/decrease/${props.id}`)
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error);
                })
            }
            if(complete === false){
                axios.patch(`http://localhost:5000/api/habits/increase/${props.id}`)
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error);
                })
            }
            console.log('updated')
        }
    }
    return (
        <div>
           <button className={complete === true ? styles.completed : styles.notCompleted} onClick={() => completeHabit(props.id)}></button> 
        </div>
    )
}
