require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const animalRoutes = require('./routes/animalRoutes');


const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/users', userRoutes);
app.use('/animals', animalRoutes);






app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;