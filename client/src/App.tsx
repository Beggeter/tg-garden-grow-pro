import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GameRoot from './GameRoot';
import '@telegram-apps/sdk/dist/styles.css';

const App: React.FC = () => (
  <BrowserRouter>
    <GameRoot />
  </BrowserRouter>
);

export default App;
