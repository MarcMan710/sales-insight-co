// controllers/logController.js
const logModel = require('../models/logModel');

async function getLogs(req, res) {
  try {
    const logs = await logModel.getLogs();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve logs', error: err.message });
  }
}

module.exports = {
  getLogs,
};
