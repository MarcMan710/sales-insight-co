// pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="mb-4">Page not found</p>
    <Link to="/dashboard" className="text-blue-600 hover:underline">Back to Dashboard</Link>
  </div>
);

export default NotFound;
