// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const animalRoutes = require('./routes/animalRoutes');
const animalHLSRoutes = require('./routes/animalHLSRoutes');
const cameraRoutes = require('./routes/cameraRoutes');
const reportRoutes = require('./routes/reportRoutes');


const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/users', userRoutes);
app.use('/animals', animalRoutes);
app.use('/animalHLS', animalHLSRoutes);
app.use('/cameras', cameraRoutes);
app.use('/reports', reportRoutes);



app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;