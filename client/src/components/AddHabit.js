import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import styles from './AddHabits.module.css'
import axios from 'axios'

export default function AddHabit(props) {
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onDescriptionChange = (e) => {
        setDesc(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/habits', {
            title: title,
            description: description
        }, {'withCredentials':true})
            .then((response) => {
                console.log(response);
                props.setNewHabitData(response)
              }, (error) => {
                console.log(error);
              });
        console.log('submited')
    }
    console.log(title)
    console.log(description)
    return (
        <div>
            <Card style={{ backgroundColor: "#424242" }} className={styles.card}>
                <CardContent>
                    <form 
                        noValidate 
                        autoComplete="off"
                        onSubmit={onSubmit}
                    >
                        <div className={styles.title}>
                            <TextField id="standard-basic" 
                                label="Enter a habit title..." 
                                onChange={onTitleChange}
                            />
                        </div>
                        <div className={styles.description}>
                            <TextField
                                id="filled-multiline-static"
                                label="Habit description..."
                                multiline
                                rows="4"
                                onChange={onDescriptionChange}
                            />
                        </div>
                        <div className={styles.submit}>
                            <Button 
                                type="submit"
                                variant="contained" 
                                style={{ backgroundColor: green[500] }}
                            >
                                Add
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
