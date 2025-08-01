import { useEffect } from 'react';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export const useStarsPayment = () => {
  useEffect(() => {
    window.Telegram?.WebApp.ready();
  }, []);

  const pay = (sku: string, userId: number) => {
    const payload = JSON.stringify({ sku, userId });
    window.Telegram?.WebApp?.openInvoice({
      slug: sku,
      currency: 'XTR',
      payload,
    });
  };

  return { pay };
};
