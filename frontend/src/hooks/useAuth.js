// hooks/useAuth.js
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export default function useAuth() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwtDecode(token) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    try {
      setUser(token ? jwtDecode(token) : null);
    } catch {
      setUser(null);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser(jwtDecode(token));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isAdmin = user?.role === 'admin';
  const isManager = user?.role === 'manager';
  const isSalesRep = user?.role === 'sales_rep';

  return {
    user,
    login,
    logout,
    isAdmin,
    isManager,
    isSalesRep,
    isAuthenticated: !!user,
  };
}
