const express = require('express');

const app = express();

app.get('/', (req, res) => res.json('Api running'));

app.listen(3002, () => console.log('Listening on port 3002'));