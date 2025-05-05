// pages/AdminUsers.jsx
import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import Button from '../components/common/Button';
import { useAuthContext } from '../context/AuthContext';

const AdminUsers = () => {
  const { isAdmin } = useAuthContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    load();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete user?')) {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  if (!isAdmin) return <p>You do not have permission to view this page.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Users</h1>
      <table className="w-full bg-white dark:bg-gray-800 rounded shadow">
        <thead>
          <tr className="text-left border-b">
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">
                <Button className="bg-red-600 hover:bg-red-700 text-xs px-2 py-1" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
