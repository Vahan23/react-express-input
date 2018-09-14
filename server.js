const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.post('/api', (req, res) => {
  const get = req.body;
  console.log(get);
  res.send({ express: 'Hi' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
