// components/dashboard/DashboardGrid.jsx
const DashboardGrid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {children}
  </div>
);

export default DashboardGrid;
