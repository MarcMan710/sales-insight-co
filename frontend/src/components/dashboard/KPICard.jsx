// components/dashboard/KPICard.jsx
const KPICard = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
    </div>
    <div className="text-2xl text-blue-500">{icon}</div>
  </div>
);

export default KPICard;
