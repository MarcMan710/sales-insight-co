// models/logModel.js
const db = require('./db');

async function logActivity(userId, action) {
  await db.query(
    `INSERT INTO logs (user_id, action, timestamp) VALUES ($1, $2, NOW())`,
    [userId, action]
  );
}

async function getLogs(limit = 100) {
  const result = await db.query(
    `SELECT l.*, u.name FROM logs l JOIN users u ON l.user_id = u.id ORDER BY timestamp DESC LIMIT $1`,
    [limit]
  );
  return result.rows;
}

module.exports = {
  logActivity,
  getLogs,
};
