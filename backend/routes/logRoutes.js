// routes/logRoutes.js
const express = require('express');
const router = express.Router();
const { getLogs } = require('../controllers/logController');
const authenticateToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

router.use(authenticateToken);
router.use(authorizeRoles('admin'));

router.get('/', getLogs);

module.exports = router;
