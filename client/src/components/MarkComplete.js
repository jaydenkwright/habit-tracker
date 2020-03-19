import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function MarkComplete(props) {
    const notCompleted = {
        backgroundColor: "#f44336",
        width: "2em",
        height: "1em",
        color: "#f44336",
        outline: "none",
        border: "none"
    }

    const completed = {
        backgroundColor: "#43a047",
        width: "2em",
        height: "1em",
        color: "#43a047",
        outline: "none",
        border: "none"
    }
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

            console.log('updated')
        }
    }
    return (
        <div>
           <button style={complete === true ? completed : notCompleted} onClick={() => completeHabit(props.id)}></button> 
        </div>
    )
}
