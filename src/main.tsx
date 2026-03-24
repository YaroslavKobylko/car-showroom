import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import App from './pages/App/App';
import { VehicleDetails } from './pages/VehicleDetails/VehicleDetails';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);