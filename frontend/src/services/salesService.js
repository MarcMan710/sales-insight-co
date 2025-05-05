// services/salesService.js
import API from './api';

export const getSales = async (filters = {}) => {
  const res = await API.get('/sales', { params: filters });
  return res.data;
};

export const createSale = async (saleData) => {
  const res = await API.post('/sales', saleData);
  return res.data;
};

export const exportCSV = async (filters = {}) => {
  const res = await API.get('/sales/export/csv', {
    params: filters,
    responseType: 'blob',
  });
  return res.data;
};

export const exportPDF = async (filters = {}) => {
  const res = await API.get('/sales/export/pdf', {
    params: filters,
    responseType: 'blob',
  });
  return res.data;
};
