const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/pardot-success', (req, res) => {
  res.status(200).send({"result":"success"});
})

app.get('/pardot-error', (req, res) => {
  res.status(200).send({"result":"error"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})