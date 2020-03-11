import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const title = {
    fontSize: "72px",
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

const highlight = {
    backgroundColor: "#43a047",
    width: "2em",
    height: "1em",
    color: "#43a047"
}

export class Habits extends Component {
    render() {
        return (
            <div>
                <Typography style={title}>
                    Today
                </Typography>
                <Card style={card}>
                    <CardContent>
                        <div style={habitTitle}>
                            Wake up before 8:30 AM
                        </div>
                        <div style={highlight}>.</div>
                        <Typography variant="h5" color="" style={description}>
                            Wake up and get out of bed by 7:00 AM
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={card}>
                    <CardContent>
                        <Typography style={habitTitle}>
                            Leave the house by 8:30 AM
                        </Typography>
                        <div style={highlight}>.</div>
                        <Typography variant="h5" style={description}>
                            Be out of the house by 8:30 AM
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={card}>
                    <CardContent>
                        <Typography style={habitTitle}>
                            Read a book
                        </Typography>
                        <div style={highlight}>.</div>
                        <Typography variant="h5" style={description}>
                            Read for at least 30 minutes everyday
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Habits
