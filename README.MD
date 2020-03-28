# habit-tracker
Habit Tracker web app built with MongoDB, Express, React, &amp; Node.js (MERN)

![Homepage Screenshot](https://i.imgur.com/mpaJGqJ.png)

#Features

* Login / Register
* Add new habits through POST requests to the API
* View habits through GET requests
* Delete habits with DELETE requests
* Mark habits as completed

# Built With

[Mongoose.js](https://mongoosejs.com)

``` javascript
mongoose.connect(process.env.DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to databse'))
    .catch(err => console.log(err))
```

Used to connect to the MongoDB database

[Axios](https://github.com/axios/axios)

``` javascript
axios.get('http://localhost:5000/api/habits')
      .then((response) => {
        setHabitData(response.data)
      })
  }
```

Used to make API calls to the backend Express server

[bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

``` javascript
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
```
Hashing password during registration

``` javascript
    const validPassword = await bcrypt.compare(req.body.password, email.password)
     if(!validPassword) return res.status(400).send('Username or Password is incorrect') 
```

Comparing passwords during login

[Moment.js](https://momentjs.com)

``` javascript
    const start = moment(new Date(req.params.date)).startOf("day")
    const end = moment(new Date(req.params.date)).endOf("day")
```
Used to get the start and end of days to be used in API

[JSON Web Token](https://jwt.io)

``` javascript
    const token = jwt.sign({id: email._id}, process.env.TOKEN_SECRET)
     res.header('login-token', token).json({token: token})
```
Used to create login authorization tokens

``` javascript
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
```

[Material Ui](https://material-ui.com)

``` JSX
<Card style={{ backgroundColor: "#424242" }} className={styles.card}>
    <CardContent>
        <div className={styles.delete} onClick={() => deleteHabit(habit._id)}>
            x
        </div>
        <div className={styles.habitTitle} onClick={() => loadHabit(habit._id)}>
            {habit.title}
        </div>
        <MarkComplete id={habit._id} date={date}/>
        <Typography variant="h5" color="" className={styles.description} onClick={() => loadHabit(habit._id)}>
            {habit.description}
        </Typography>
    </CardContent>
</Card>
```

Material UI Cards used to display habits

[React](https://reactjs.org)

[Node.js](https://nodejs.org/en/)

[Express.js](https://expressjs.com)

[MongoDB](https://www.mongodb.com)


