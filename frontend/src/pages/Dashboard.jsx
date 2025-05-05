// pages/Dashboard.jsx
import { useState } from 'react';
import { useSalesData } from '../hooks/useSalesData';
import KPICard from '../components/dashboard/KPICard';
import SalesChart from '../components/dashboard/SalesChart';
import FilterPanel from '../components/dashboard/FilterPanel';
import ExportPanel from '../components/dashboard/ExportPanel';
import DashboardGrid from '../components/dashboard/DashboardGrid';
import { exportCSV, exportPDF } from '../services/salesService';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [filters, setFilters] = useState({ region: '', category: '', startDate: '', endDate: '' });
  const { sales } = useSalesData(filters);

  const totalRevenue = sales.reduce((acc, s) => acc + s.amount, 0);
  const uniqueCustomers = new Set(sales.map((s) => s.customerId)).size;

  const handleExportCSV = async () => {
    const blob = await exportCSV(filters);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sales.csv';
    a.click();
  };

  const handleExportPDF = async () => {
    const blob = await exportPDF(filters);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sales.pdf';
    a.click();
  };

  const onFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <FilterPanel filters={filters} onChange={onFilterChange} />
      <ExportPanel onExportCSV={handleExportCSV} onExportPDF={handleExportPDF} />
      <DashboardGrid>
        <KPICard title="Total Revenue" value={`$${totalRevenue.toLocaleString()}`} icon={<DollarSign />} />
        <KPICard title="Total Sales" value={sales.length} icon={<TrendingUp />} />
        <KPICard title="Customers" value={uniqueCustomers} icon={<Users />} />
      </DashboardGrid>
      <SalesChart data={sales.map(s => ({ date: s.date, total: s.amount }))} />
    </div>
  );
};

export default Dashboard;
