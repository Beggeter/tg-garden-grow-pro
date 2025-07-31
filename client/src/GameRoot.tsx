import React, { useEffect } from 'react';
import { init } from '@telegram-apps/sdk';
import GameCanvas from './GameCanvas';

const GameRoot: React.FC = () => {
  useEffect(() => {
    init(); // инициализируем Telegram SDK
  }, []);

  return <GameCanvas />;
};

export default GameRoot;
