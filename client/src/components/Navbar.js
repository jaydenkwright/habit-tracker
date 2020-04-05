import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './Navbar.module.css'

export default function Navbar() {

    return (
        <div>
            <header>
                <div className={styles.title}>
                    Habit Tracker
                </div>
            </header>
        </div>
    )
}
