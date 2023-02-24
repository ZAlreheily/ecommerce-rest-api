const router = require('express').Router()
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const validation = require('../helpers/validation');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const userEmail = user.email;
    const userPassword = user.password;
    const userID = user._id;

    const matchPassword = await bcrypt.compare(password, userPassword);
    if (email === userEmail && matchPassword) {
        const payload = { userID };
        const token = jwt.sign(payload, JWT_SECRET);
        res.cookie('jwt', token);
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const validEmail = validation.isValidEmail(email);
    if (!validEmail) {
        res.status(401).json({ messege: 'email is not valid.' });
    }
    const validPassword = validation.isValidPassword(password);
    if (!validPassword) {
        res.status(401).json({ messege: 'password is not valid.' });
    }
    if (!firstName || !lastName) {
        res.status(401).json({ messege: 'name is missing.' });
    }

    const hashedPassword = await bcrypt.hash(password, 13);
    await User.create({ firstName, lastName, email, password: hashedPassword })
    res.json({ messege: 'user has been registered.' });
});

module.exports = router;