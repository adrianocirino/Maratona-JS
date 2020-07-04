const express = require('express');
const db = require('./models');
const response = require('../src/middlewares/response')

const authController = require('./controllers/auth');

const app = express();

app.use(response);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);

app.get('/', (req, res) => res.json('Api running'));

db.sequelize.sync().then(() => {
    app.listen(3002, () => console.log('Listening on port 3002'));
});

