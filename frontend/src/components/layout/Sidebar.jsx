// components/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { isAdmin, isManager } = useAuthContext();

  const navItems = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/reports', label: 'Reports' },
    ...(isAdmin ? [{ to: '/admin/users', label: 'Manage Users' }] : []),
    ...(isManager ? [{ to: '/logs', label: 'Activity Logs' }] : []),
  ];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      {navItems.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
            location.pathname === to ? 'bg-gray-300 dark:bg-gray-700 font-semibold' : ''
          }`}
        >
          {label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
