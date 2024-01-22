import React from 'react';
import { createRoot } from 'react-dom/client';

import { Container, Text } from './libs/atoms';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const app = document.getElementById('app');
const root = createRoot(app);

root.render((
    <Container>
        <Text>It works</Text>
    </Container>
));

