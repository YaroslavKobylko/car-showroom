import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { VehicleDetails } from './VehicleDetails';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('VehicleDetails Page', () => {
  it('відображає лоадер під час завантаження даних', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/vehicles/167']}>
          <Routes>
            <Route path="/vehicles/:vehicleId" element={<VehicleDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const loader = document.querySelector('.spinner');
    expect(loader).toBeInTheDocument();
  });
});