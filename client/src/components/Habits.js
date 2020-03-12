import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Context from '../Context/Context'

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



export class Habits extends Component {
    render() {
        return (
            <div>
                <Typography style={title}>
                    Today
                </Typography>
                <Typography style={date}>
                    Wed March 12
                </Typography>
            <Context.Consumer>
                {context => 
                    <div>
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
}

export default Habits
