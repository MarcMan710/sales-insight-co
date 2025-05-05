// services/userService.js
import API from './api';

export const getAllUsers = async () => {
  const res = await API.get('/users');
  return res.data;
};

export const updateUser = async (id, updates) => {
  const res = await API.put(`/users/${id}`, updates);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};
