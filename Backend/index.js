import express, { urlencoded } from 'express'
import { mongoDb } from './db/index.js'
import "dotenv/config"
import userRouter from './routers/user.route.js'
import todoRouter from './routers/todo.route.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())



app.get('/', (req, res) => {
  res.send('hello this is the home page')
})

//routes
app.use('/api/v0/users' , userRouter)
app.use('/todos' , todoRouter )

const port = process.env.BASE_URL || 4000
app.listen(port, () => {
  console.log('app is lestening is the port 3000')
})


//database connection
mongoDb()