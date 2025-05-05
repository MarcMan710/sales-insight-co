// utils/pdfExport.js
const PDFDocument = require('pdfkit');
const getStream = require('get-stream');

async function exportSalesToPDF(salesData) {
  const doc = new PDFDocument();
  doc.fontSize(16).text('Sales Report', { align: 'center' });
  doc.moveDown();

  salesData.forEach(sale => {
    doc.fontSize(12).text(
      `${sale.date} | ${sale.product_name} | ${sale.category} | ${sale.region} | $${sale.amount}`
    );
  });

  doc.end();
  return await getStream.buffer(doc);
}

module.exports = exportSalesToPDF;
