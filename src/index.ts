import dotenv from 'dotenv'
import express from 'express'

// initialize configuration
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
