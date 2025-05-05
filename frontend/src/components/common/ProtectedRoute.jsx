import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {JSX.Element} props.children - The protected content to render
 * @param {string[]} [props.roles] - Optional list of roles allowed to access this route
 */
const ProtectedRoute = ({ children, roles = [] }) => {
  const { user, isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length > 0 && !roles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
