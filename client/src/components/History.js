import React from 'react'
import moment from 'moment'
import styles from './History.module.css'

export default function History(props) {
    const {completionData} = props
    return (
        <div className={styles.history}>
            <h1>History</h1>
            {completionData.map((completion) => (
                <div className={styles.historyItem}>
                    <div className={styles.button}>
                        <div className={styles.completed}></div>
                    </div>
                    <div className={styles.historyText}>
                        Completed on {moment(completion.date).format("MMM D YYYY")}
                    </div>
                </div>
            ))}
        </div>
    )
}
