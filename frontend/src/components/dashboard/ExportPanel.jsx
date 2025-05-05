// components/dashboard/ExportPanel.jsx
import Button from '../common/Button';

const ExportPanel = ({ onExportCSV, onExportPDF }) => (
  <div className="flex gap-4 mt-4">
    <Button onClick={onExportCSV}>Export CSV</Button>
    <Button onClick={onExportPDF} className="bg-green-600 hover:bg-green-700">
      Export PDF
    </Button>
  </div>
);

export default ExportPanel;
