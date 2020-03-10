import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const title = {
    fontSize: "20"
}

const card = {
    marginTop: "1em",

    width: "70%",
    display: "inline-block"
}

export class Habits extends Component {
    render() {
        return (
            <div>
                <Card style={card}>
                    <CardContent>
                        <Typography style={title}>
                            Wake up before 7:00 AM
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={card}>
                    <CardContent>
                        <Typography style={title}>
                            Leave the house by 8:30 AM
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={card}>
                    <CardContent>
                        <Typography style={title}>
                            Read a book
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Habits
