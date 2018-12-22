import dotenv from 'dotenv'
import express from 'express'
import expressGraphQL from 'express-graphql'

import schema from './schema'

// initialize configuration
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use('/graphql', expressGraphQL({ schema, graphiql: true }))

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
