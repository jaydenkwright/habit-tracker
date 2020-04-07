import React from 'react'
import moment from 'moment'
import styles from './History.module.css'

export default function History(props) {
    const {completionData} = props
    return (
        <div className={styles.history}>
            {completionData.map((completion) => (
                <div>
                    Completed on {moment(completion.date).format("MMM D YYYY")}
                </div>
            ))}
        </div>
    )
}
