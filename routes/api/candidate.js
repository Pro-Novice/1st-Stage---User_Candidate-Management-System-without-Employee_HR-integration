//part 2 added
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//part3 added
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
//part 4 added
require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserController = require('../../controller/userController');

// @route         GET api/users
// @description   test route
// @access        Public
router.get('/', (req, res) => res.send('User route'));

//part3 added - Postman validation
// @route         POST api/users
// @description   register user
// @access        public
router.post('/', UserController.addUser);

module.exports = router;