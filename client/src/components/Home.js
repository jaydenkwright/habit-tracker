import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import axios from 'axios'
import styles from './Home.module.css'

export default function Home(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPassChange = (e) => {
        setPass(e.target.value)
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/login', {
            email: email,
            password: pass
        }, {'withCredentials':true})
            .then((response) => {
                if(response.data.error){
                    setError(response.data.error)
                    console.log(response.data.error)
                }else{
                    console.log(response);
                    props.setLoggedIn(true)
                }

              }, (error) => {
                console.log(error);
              });
    }
    const registration = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/register', {
            name: name,
            email: email,
            password: pass
        }, {'withCredentials':true})
        .then((response) => {
            if(response.data.error){
                setError(response.data.error)
                console.log(response.data.error)
            }else{
                console.log(response);
            }
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <main>
                <section className={styles.presentation}>
                    <div className={styles.introduction}>
                        <div className={styles.chartsImage}>
                            <svg className={styles.svg} viewBox="0 0 884 612" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="undraw_charts_jj6t 1">
                                <path id="background" d="M884 0H0V612H884V0Z" fill="url(#paint0_linear)"/>
                                <g id="bar">
                                <path id="Vector" d="M876 9H11V66H876V9Z" fill="#BDBDBD"/>
                                <path id="Vector_2" d="M51.91 51.5C59.642 51.5 65.91 45.232 65.91 37.5C65.91 29.768 59.642 23.5 51.91 23.5C44.178 23.5 37.91 29.768 37.91 37.5C37.91 45.232 44.178 51.5 51.91 51.5Z" fill="#FF5252"/>
                                <path id="Vector_3" d="M92 51.5C99.732 51.5 106 45.232 106 37.5C106 29.768 99.732 23.5 92 23.5C84.268 23.5 78 29.768 78 37.5C78 45.232 84.268 51.5 92 51.5Z" fill="#FFFF00"/>
                                <path id="Vector_4" d="M132.09 51.5C139.822 51.5 146.09 45.232 146.09 37.5C146.09 29.768 139.822 23.5 132.09 23.5C124.358 23.5 118.09 29.768 118.09 37.5C118.09 45.232 124.358 51.5 132.09 51.5Z" fill="#69F0AE"/>
                                </g>
                                <g id="chart1">
                                <path id="Vector_5" d="M148 315H104V521H148V315Z" fill="#F5F5F5"/>
                                <path id="Vector_6" d="M148 418H104V521H148V418Z" fill="#2196F3"/>
                                <g id="Group" opacity="0.4">
                                <path id="Vector_7" opacity="0.4" d="M148 375H104V420H148V375Z" fill="#2196F3"/>
                                </g>
                                </g>
                                <g id="chart2">
                                <path id="Vector_8" d="M221 315H177V521H221V315Z" fill="#F5F5F5"/>
                                <path id="Vector_9" d="M221 440.36H177V521H221V440.36Z" fill="#69F0AE"/>
                                <path id="Vector_10" opacity="0.4" d="M221 388H177V440.36H221V388Z" fill="#69F0AE"/>
                                </g>
                                <g id="chart3">
                                <path id="Vector_11" d="M294 315H250V521H294V315Z" fill="#F5F5F5"/>
                                <path id="Vector_12" d="M294 403H250V521H294V403Z" fill="#6C63FF"/>
                                <path id="Vector_13" opacity="0.4" d="M294 362H250V403H294V362Z" fill="#6C63FF"/>
                                </g>
                                <g id="chart4">
                                <path id="Vector_14" d="M367 315H323V521H367V315Z" fill="#F5F5F5"/>
                                <path id="Vector_15" d="M367 444H323V521H367V444Z" fill="#FFFF00"/>
                                <path id="Vector_16" opacity="0.4" d="M367 420H323V444H367V420Z" fill="#FFFF00"/>
                                </g>
                                <g id="pieChart">
                                <path id="Vector_17" d="M632.5 170H632V388H632.52C661.429 388 689.153 376.516 709.595 356.075C730.036 335.633 741.52 307.909 741.52 279C741.52 250.091 730.036 222.367 709.595 201.925C689.153 181.484 661.429 170 632.52 170H632.5Z" fill="url(#paint1_linear)"/>
                                <path id="Vector_18" d="M529.5 243.27C523.826 259.655 522.142 277.157 524.586 294.324C527.031 311.49 533.533 327.827 543.555 341.977C553.576 356.128 566.828 367.684 582.21 375.688C597.592 383.692 614.66 387.913 632 388V294.26L529.5 243.27Z" fill="url(#paint2_linear)"/>
                                <path id="Vector_19" d="M632 170C609.432 170.099 587.451 177.201 569.091 190.325C550.731 203.449 536.898 221.949 529.5 243.27L631.98 294.27L632 170Z" fill="url(#paint3_linear)"/>
                                <path id="Vector_20" d="M632.5 175H632V383H632.5C660.083 383 686.535 372.043 706.039 352.539C725.543 333.035 736.5 306.583 736.5 279C736.5 251.417 725.543 224.965 706.039 205.461C686.535 185.957 660.083 175 632.5 175V175Z" fill="#6C63FF"/>
                                <path id="Vector_21" d="M534.22 244.91C528.808 260.542 527.201 277.239 529.533 293.617C531.864 309.994 538.067 325.58 547.627 339.08C557.186 352.581 569.827 363.608 584.501 371.246C599.174 378.884 615.458 382.914 632 383V293.56L534.22 244.91Z" fill="#2196F3"/>
                                <path id="Vector_22" d="M632 175C610.471 175.098 589.503 181.874 571.99 194.394C554.476 206.914 541.279 224.561 534.22 244.9L632 293.56V175Z" fill="#69F0AE"/>
                                </g>
                                <g id="info">
                                <path id="Vector_23" d="M537 410H524V424H537V410Z" fill="#2196F3"/>
                                <path id="Vector_24" d="M645 410H632V424H645V410Z" fill="#7C4DFF"/>
                                <path id="Vector_25" d="M753 410H740V424H753V410Z" fill="#69F0AE"/>
                                <path id="Vector_26" d="M586 413H541V421H586V413Z" fill="#F5F5F5"/>
                                <path id="Vector_27" d="M695 413H650V421H695V413Z" fill="#F5F5F5"/>
                                <path id="Vector_28" d="M804 413H759V421H804V413Z" fill="#F5F5F5"/>
                                </g>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear" x1="442" y1="612" x2="442" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25"/>
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="93147.9" y1="116146" x2="93147.9" y2="68622" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25"/>
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="80353.3" y1="77238.2" x2="80353.3" y2="56292.9" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25"/>
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear" x1="76250.4" y1="54632.6" x2="76250.4" y2="39192" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#808080" stop-opacity="0.25"/>
                                <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
                                <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.title}>
                            Habit Tracker
                        </div>
                        <div className={styles.subtitle}>
                            Start building good habits today.
                        </div>
                    </div>
                    <div>
                    <Card style={{ backgroundColor: "#424242"}} className={styles.card}>
                        <CardContent>
                            <div class={styles.loginTitle}>
                                <h1>Login</h1>
                            </div>
                            {error ? error : null}
                            <form noValidate autoComplete="off" onSubmit={login}>
                                <div className={styles.email}>
                                    <TextField id="standard-basic" label="Email..." type="email" className={styles.emailBox} onChange={onEmailChange}/>
                                </div>
                                <div className={styles.password}>
                                    <TextField id="standard-basic" label="Password..." type="password" className={styles.passwordBox} onChange={onPassChange}/>
                                </div>
                                <div className={styles.submit}>
                                    <Button type="submit" variant="contained" style={{ backgroundColor: green[500] }} className={styles.submitBtn}>Submit</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Card style={{ backgroundColor: "#424242"}} className={styles.card}>
                        <CardContent>
                        <div class={styles.loginTitle}>
                                <h1>Sign up</h1>
                            </div>
                            {error ? error : ''}
                            <form noValidate autoComplete="off" onSubmit={registration}>
                                <div className={styles.name}>
                                    <TextField id="standard-basic" label="Name..." type="text" className={styles.nameBox} onChange={onNameChange}/>
                                </div>
                                <div className={styles.email}>
                                    <TextField id="standard-basic" label="Email..." type="text" className={styles.emailBox} onChange={onEmailChange}/>
                                </div>
                                <div className={styles.password}>
                                    <TextField id="standard-basic" label="Password..." type="password" className={styles.passwordBox} onChange={onPassChange}/>
                                </div>
                                <div className={styles.submit}>
                                    <Button type="submit" variant="contained" style={{ backgroundColor: green[500] }} className={styles.submitBtn}>Submit</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    </div>
                </section>
            </main>
        </div>
    )
}
