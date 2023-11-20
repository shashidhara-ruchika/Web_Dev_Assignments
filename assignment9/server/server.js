require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors') 

mongoose.connect(process.env.DATABASE_URL)
const db  = mongoose.connection
db.on('error', (error) => console.error(error)) 
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors());

const userRouter = require('./routes/user')
app.use('/user', userRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

app.listen(process.env.PORT, () => console.log('Server Started'))