import express from 'express'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`server started at 127.0.0.1:${port}`)
})
