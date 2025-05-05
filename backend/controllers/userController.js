// controllers/userController.js
const userModel = require('../models/userModel');

async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users', error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const updated = await userModel.updateUser(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    await userModel.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
}

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
};
