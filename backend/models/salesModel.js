// models/salesModel.js
const db = require('./db');

async function getSales({ start, end, category, region }) {
  let query = `SELECT * FROM sales WHERE 1=1`;
  const values = [];

  if (start) {
    values.push(start);
    query += ` AND date >= $${values.length}`;
  }
  if (end) {
    values.push(end);
    query += ` AND date <= $${values.length}`;
  }
  if (category) {
    values.push(category);
    query += ` AND category = $${values.length}`;
  }
  if (region) {
    values.push(region);
    query += ` AND region = $${values.length}`;
  }

  query += ` ORDER BY date DESC`;
  const result = await db.query(query, values);
  return result.rows;
}

async function insertSale(sale) {
  const { date, product_name, category, region, amount, rep_id } = sale;
  const result = await db.query(
    `INSERT INTO sales (date, product_name, category, region, amount, rep_id)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [date, product_name, category, region, amount, rep_id]
  );
  return result.rows[0];
}

module.exports = {
  getSales,
  insertSale,
};
