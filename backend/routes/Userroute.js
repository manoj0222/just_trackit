// routes/Userroute.js
const express = require('express');
const { createUser, getUserById } = require('../controller/UserController');
const urlController = require("../controller/UrlController");

const router = express.Router();

router.post('/', createUser);
router.get('/:userId', getUserById);




module.exports = router;
