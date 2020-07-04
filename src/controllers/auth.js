const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign In!');
});

router.get('/sign-up', async (req, res) => {

    const email = 'adriano.cirino.da.silva@gmail.com';
    const password = '98550754aa';

    const hash = bcrypt.hashSync(password, saltRounds);
    const result = await Account.create({ email, password: hash });
    
    return res.json(result);
});

module.exports = router;