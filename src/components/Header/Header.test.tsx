import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect, vi } from 'vitest';

describe('Header', () => {
  const mockProps = {
    searchTerm: '',
    onSearchChange: vi.fn(),
    sortBy: 'default' as const,
    onSortChange: vi.fn(),
  };

  it('рендерить логотип та всі елементи керування', () => {
    render(<Header {...mockProps} />);
    
    expect(screen.getByText(/Car Showroom/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/пошук/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/toggle theme/i)).toBeInTheDocument();
  });
});