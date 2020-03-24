import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import styles from './Login.module.css'

export default function Login() {
    return (
        <div>
            <form>
            <Card style={{ backgroundColor: "#424242"}} className={styles.card}>
                <CardContent>
                    <form noValidate autoComplete="off">
                        <div className={styles.email}>
                            <TextField id="standard-basic" label="Email" type="email" className={styles.emailBox}/>
                        </div>
                        <div className={styles.password}>
                            <TextField id="standard-basic" label="Password" type="password" className={styles.passwordBox}/>
                        </div>
                        <div className={styles.submit}>
                            <Button type="submit" variant="contained" style={{ backgroundColor: green[500] }} className={styles.submitBtn}>Submit</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
            </form>
        </div>
    )
}
