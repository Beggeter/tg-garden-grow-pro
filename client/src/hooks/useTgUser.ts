import { useEffect, useState } from 'react';
import { init } from '@telegram-apps/sdk';

export const useTgUser = () => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const data = init();
    setUser(data.user);
  }, []);
  return user;
};
