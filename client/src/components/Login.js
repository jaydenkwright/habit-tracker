import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import axios from 'axios'
import styles from './Login.module.css'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPassChange = (e) => {
        setPass(e.target.value)
    }
    const login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/login', {
            email: email,
            password: pass
        })
            .then((response) => {
                if(response.data.error){
                    setError(response.data.error)
                    console.log(response.data.error)
                }else{
                    console.log(response);
                    props.setToken(response.data.token)
                    document.cookie=`login_token=${response.data.token}`
                }

              }, (error) => {
                console.log(error);
              });
    }

    return (
        <div>
            <form>
            <Card style={{ backgroundColor: "#424242"}} className={styles.card}>
                <CardContent>
                    {error ? error : ''}
                    <form noValidate autoComplete="off" onSubmit={login}>
                        <div className={styles.email}>
                            <TextField id="standard-basic" label="Email" type="email" className={styles.emailBox} onChange={onEmailChange}/>
                        </div>
                        <div className={styles.password}>
                            <TextField id="standard-basic" label="Password" type="password" className={styles.passwordBox} onChange={onPassChange}/>
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
