// routes/index.js
const express = require('express');
const router = express.Router();

router.use('/auth', require('./authRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/sales', require('./salesRoutes'));
router.use('/logs', require('./logRoutes'));

module.exports = router;
