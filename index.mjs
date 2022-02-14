import express from 'express'
const app = express()
const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('ABI chek kr looo')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port AT http//:localhost:${PORT}`)
})