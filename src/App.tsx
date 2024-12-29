import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { CustomCursor } from './components/effects/CustomCursor';
import { CursorSparkle } from './components/effects/CursorSparkle';

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}