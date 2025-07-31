import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

const GameCanvas: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
      resizeTo: window,
    });
    ref.current?.appendChild(app.view as any);

    // пример спрайта
    const bunny = PIXI.Sprite.from('assets/sprites/bunny.png');
    bunny.anchor.set(0.5);
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;
    app.stage.addChild(bunny);

    return () => {
      app.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '100vh' }} />;
};

export default GameCanvas;
