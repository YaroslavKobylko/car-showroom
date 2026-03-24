import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { VehicleCard } from './VehicleCard';
import { describe, it, expect } from 'vitest';
import type { Vehicle } from '../../types/vehicle';

const mockVehicle: Partial<Vehicle> = {
  id: 1,
  title: 'Tesla Model 3',
  brand: 'Tesla',
  price: 40000,
  thumbnail: 'test.jpg',
  rating: 4.8,
};

describe('VehicleCard', () => {
  it('відображає назву, бренд та ціну', () => {
    render(
      <BrowserRouter>
        <VehicleCard vehicle={mockVehicle as Vehicle} />
      </BrowserRouter>
    );

    expect(screen.getByText('Tesla Model 3')).toBeInTheDocument();
    expect(screen.getByText('Tesla')).toBeInTheDocument();
    expect(screen.getByText((content) => {
      return content.includes('$') && content.includes('40') && content.includes('000');
    })).toBeInTheDocument();
  });
});