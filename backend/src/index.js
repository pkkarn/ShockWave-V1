const express = require('express');
const api = require('./api');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api', api);
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to this api' });
});

const port = 3000 || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
