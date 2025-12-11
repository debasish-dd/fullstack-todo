import express, { urlencoded } from 'express'
import { mongoDb } from './db/index.js'
import "dotenv/config"

const app = express()

app.get('/', (req, res) => {
  res.send('hello this is the home page')
})

//database connection
mongoDb()

app.use(express.urlencoded({extended: true}))

const port = process.env.BASE_URL || 4000
app.listen(port, () => {
  console.log('app is lestening is the port 3000')
})
