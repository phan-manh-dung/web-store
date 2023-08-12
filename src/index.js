import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App'; // Sử dụng đường dẫn đúng
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
const reactAppPort = 3000; // Đổi cổng theo mong muốn (vd: 3000, 3001, ...)

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);

// Gọi reportWebVitals nếu cần
reportWebVitals(console.log);
