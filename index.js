const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
});
app.get('/healthz',(res,req) => {
  res.status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});