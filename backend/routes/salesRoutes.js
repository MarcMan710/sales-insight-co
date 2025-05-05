// routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const {
  getSales,
  createSale,
  exportCSV,
  exportPDF,
} = require('../controllers/salesController');

const authenticateToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

router.use(authenticateToken);

// View sales (All roles)
router.get('/', getSales);

// Insert sale (sales_rep and above)
router.post('/', authorizeRoles('admin', 'manager', 'sales_rep'), createSale);

// Export options (manager and admin)
router.get('/export/csv', authorizeRoles('admin', 'manager'), exportCSV);
router.get('/export/pdf', authorizeRoles('admin', 'manager'), exportPDF);

module.exports = router;
