import express, { urlencoded } from 'express'
import { mongoDb } from './db/index.js'
import userRouter from './routers/user.route.js'
import todoRouter from './routers/todo.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

  // env variables
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//cors
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))


app.get('/', (req, res) => {
  res.send('hello this is the home page')
})

//routes
app.use('/api/v0/users' , userRouter)
app.use('/api/v1' , todoRouter )

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('app is listening on port', port)
})


//database connection
mongoDb()