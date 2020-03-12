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



function Habits (){
    const title = {
        fontSize: "72px",
        color: "#fafafa"
    }
    
    const date = {
        fontSize: "1.5em",
        color: "#fafafa"
    }
    
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
        color: "#f44336"
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
    
    const toggleAddHabit = () => {
        setAddHabitVisible(!addHabitVisisble)
        console.log(addHabitVisisble)
    }
        return (
            <div>
                <h1 className={styles.title}>
                    Today
                </h1>
                <h1 className={styles.date}>
                    Wed March 12
                </h1>
            <Context.Consumer>
                {context => 
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
                                    <div style={habitTitle}>
                                        {habit.title}
                                    </div>
                                    <div style={essential}>.</div>
                                    <Typography variant="h5" color="" style={description}>
                                    {habit.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                    </div>
                } 
            </Context.Consumer>
            </div>
        )
    }

export default Habits
