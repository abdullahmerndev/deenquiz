import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// New Root API:
const container = document.getElementById('root');

// Create a root:
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root
root.render(<App />);
