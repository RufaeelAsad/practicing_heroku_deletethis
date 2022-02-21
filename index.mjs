import express from 'express'
const app = express()
const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('dobbara check kr looooo')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port AT http//:localhost:${PORT}`)
})  