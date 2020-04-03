import React from 'react'
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import styles from './Footer.module.css'

export default function Footer(props) {

    const logout = () => {
        // axios.post('http://localhost:5000/api/user/logout', {'withCredentials':true})
        //     .then((response) => {
        //         console.log(response);
        //         console.log('logged out')
        //         //props.setLoggedIn(false)
        //       }, (error) => {
        //         console.log(error);
        //       });
        // console.log('logged out')

        fetch('http://localhost:5000/api/user/logout', { 
            method: 'POST',
            credentials: 'include'
        })
            .then((response) => {
                console.log(response.json())
                props.setLoggedIn(false)
            })
            .then((data) => {
                console.log(data);
            });
        
    }

    return (
        <div>
            <div className={styles.main}>
                .
            <div className={styles.footerInfo}>
            {
                props.isLoggedIn ?  <Button type="submit" variant="contained" style={{ backgroundColor: red[500] }} onClick={logout}> Logout </Button> 
                : null
            }
            </div>
            </div>
        </div>
    )
}
