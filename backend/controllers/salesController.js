// controllers/salesController.js
const salesModel = require('../models/salesModel');
const exportSalesToCSV = require('../utils/csvExport');
const exportSalesToPDF = require('../utils/pdfExport');

async function getSales(req, res) {
  try {
    const sales = await salesModel.getSales(req.query);
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch sales', error: err.message });
  }
}

async function createSale(req, res) {
  try {
    const newSale = await salesModel.insertSale(req.body);
    res.status(201).json(newSale);
  } catch (err) {
    res.status(500).json({ message: 'Failed to insert sale', error: err.message });
  }
}

async function exportCSV(req, res) {
  try {
    const sales = await salesModel.getSales(req.query);
    const csv = exportSalesToCSV(sales);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=sales_report.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: 'CSV export failed', error: err.message });
  }
}

async function exportPDF(req, res) {
  try {
    const sales = await salesModel.getSales(req.query);
    const pdfBuffer = await exportSalesToPDF(sales);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=sales_report.pdf');
    res.send(pdfBuffer);
  } catch (err) {
    res.status(500).json({ message: 'PDF export failed', error: err.message });
  }
}

module.exports = {
  getSales,
  createSale,
  exportCSV,
  exportPDF,
};
