import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Context from '../Context/Context'
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import axios from 'axios'

export default function AddHabit() {

    const card = {
        marginTop: "1em",
        padding: ".3em",
        width: "70%",
        display: "inline-block",
        backgroundColor: "#424242",
        textAlign: "left"
    }

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
        })
            .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
        console.log('submited')
    }
    console.log(title)
    console.log(description)
    return (
        <div>
            <Card style={card}>
                <CardContent>
                    <form 
                        noValidate 
                        autoComplete="off"
                        onSubmit={onSubmit}
                    >
                        <div>
                            <TextField id="standard-basic" 
                            label="Enter a habit title..." 
                            onChange={onTitleChange}
                            />
                        </div>
                        <div>
                            <TextField
                            id="filled-multiline-static"
                            label="Habit description..."
                            multiline
                            rows="4"
                            onChange={onDescriptionChange}
                            />
                        </div>
                        <Button 
                            type="submit"
                            variant="contained" 
                            style={{ backgroundColor: green[500] }}
                        >
                            Add
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
