import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import moment from 'moment'

export default function Chart(props) {
    const startDate = moment(props.startDate)
    const d = moment(new Date())
    const total = d.diff(startDate, 'days')
    const notComplete = total - props.completions
    const data = {
        labels: [
            'Completed',
            'Not Completed'
        ],
        datasets: [{
            data: [props.completions, notComplete],
            backgroundColor: [
                '#43a047',
                '#f44336',
                ],
            hoverBackgroundColor: [
                '#388e3c',
                '#e53935',
                ],
            borderColor: [
                '#43a047',
                '#f44336',
            ]
        }]
    }
    return (
        <div>
            <Doughnut data={data} />
        </div>
    )
}
