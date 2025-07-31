import axios from 'axios';

export const createStarsInvoice = async (sku: string, userId: number) => {
  const { data } = await axios.post('/api/createInvoice', { sku, userId });
  return data.invoiceUrl;
};
