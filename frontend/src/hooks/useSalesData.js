// hooks/useSalesData.js
import { useEffect, useState } from 'react';
import { getSales } from '../services/salesService';

export default function useSalesData(filters = {}) {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSales = async () => {
    setLoading(true);
    try {
      const data = await getSales(filters);
      setSales(data);
    } catch (err) {
      console.error('Error fetching sales:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSales();
  }, [JSON.stringify(filters)]);

  return { sales, loading, refetch: fetchSales };
}
