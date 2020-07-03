const express = require('express');

const authController = require('./controllers/auth');

const app = express();

app.use('/auth', authController);

app.get('/', (req, res) => res.json('Api running'));

app.listen(3002, () => console.log('Listening on port 3002'));