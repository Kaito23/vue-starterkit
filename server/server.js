const express = require('express')
const app = express()
const port = 4000

app.use(express.static('./server/src'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
