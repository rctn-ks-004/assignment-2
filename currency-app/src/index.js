import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import { Index } from './component/template';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>
);

