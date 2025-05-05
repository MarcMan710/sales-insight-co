// components/common/Header.jsx
import { useAuthContext } from '../../context/AuthContext';

const Header = ({ onToggleTheme }) => {
  const { user, logout } = useAuthContext();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Sales Insights Co.</h1>
      <div className="flex items-center gap-4">
        {user && <span className="text-sm text-gray-600 dark:text-gray-300">Logged in as: {user.email}</span>}
        <button onClick={onToggleTheme} className="px-2 py-1 text-sm border rounded">
          Toggle Theme
        </button>
        {user && (
          <button onClick={logout} className="px-3 py-1 text-sm bg-red-500 text-white rounded">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
