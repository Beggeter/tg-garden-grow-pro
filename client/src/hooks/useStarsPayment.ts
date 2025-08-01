export const payWithStars = (sku: string, userId: number) => {
  const payload = `sku:${sku}:userId:${userId}`;

  if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
    if (window.Telegram.WebApp?.pay) {
      window.Telegram.WebApp.pay({
        slug: sku,
        payload: payload,
      });
    } else {
      alert('tg.WebApp.pay недоступен');
    }
  } else {
    alert('Запуск возможен только внутри Telegram');
  }
};
