import { createRoot } from 'react-dom/client';

import { App } from './src/App';

const chart = document.getElementById('chart');

const root = createRoot(chart);

root.render(<App />);
