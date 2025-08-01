import { useCallback } from 'react';
import axios from 'axios';

export const useStarsPayment = () => {
  const pay = useCallback(async (sku: string, userId: number) => {
    try {
      const { data } = await axios.post('/api/createInvoice', { sku, userId });

      if (window?.Telegram?.WebApp?.openInvoice) {
        window.Telegram.WebApp.openInvoice(data.invoiceUrl);
      } else {
        window.open(data.invoiceUrl, '_blank');
      }
    } catch (err) {
      console.error('Ошибка при оплате через Stars:', err);
    }
  }, []);

  return { pay };
};
