import React from 'react';
import { createRoot } from 'react-dom/client';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dev from './dev';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(<Dev />);

