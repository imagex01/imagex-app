import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import GlobalProvider from './contexts/GlobalProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);