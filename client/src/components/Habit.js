import React, { useState, useEffect } from "react";
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Habit(props) {
    const [habit, setHabit] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/habits/${props.id}`)
          .then((response) => {
            console.log(response.data)
            setHabit(response.data)
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
    const habitTitle = {
        fontSize: "72px",
        textAlign: "left",
        color: "#eceff1",
    }
    const description = {
        color: "#bdbdbd",
        fontSize: "20px",
        paddingTop: "1em",
        paddingLeft: ".3em"
    }
    return (
        <div>
            <Card style={card}>
                <CardContent>
                    <div style={habitTitle}>
                        {habit.title}
                    </div>
                    <Typography variant="h5" style={description}>
                        {habit.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
