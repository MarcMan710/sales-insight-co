// utils/csvExport.js
const { Parser } = require('json2csv');

function exportSalesToCSV(salesData) {
  const fields = ['id', 'date', 'product_name', 'category', 'region', 'amount', 'rep_id'];
  const opts = { fields };
  const parser = new Parser(opts);
  return parser.parse(salesData);
}

module.exports = exportSalesToCSV;
