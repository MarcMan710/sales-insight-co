// models/userModel.js
const db = require('./db');
const bcrypt = require('bcryptjs');

async function createUser({ name, email, password, role }) {
  const hashed = await bcrypt.hash(password, 10);
  const result = await db.query(
    `INSERT INTO users (name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, email, hashed, role]
  );
  return result.rows[0];
}

async function getUserByEmail(email) {
  const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
  return result.rows[0];
}

async function getUserById(id) {
  const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return result.rows[0];
}

async function getAllUsers() {
  const result = await db.query(`SELECT id, name, email, role FROM users`);
  return result.rows;
}

async function updateUser(id, fields) {
  const keys = Object.keys(fields);
  const values = Object.values(fields);
  const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(', ');
  const query = `UPDATE users SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *`;
  const result = await db.query(query, [...values, id]);
  return result.rows[0];
}

async function deleteUser(id) {
  await db.query(`DELETE FROM users WHERE id = $1`, [id]);
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
