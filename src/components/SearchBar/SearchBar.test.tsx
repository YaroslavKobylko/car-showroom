import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { describe, it, expect, vi } from 'vitest';

describe('SearchBar', () => {
  it('викликає onChange при введенні тексту', () => {
    const handleChange = vi.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText(/пошук/i);
    fireEvent.change(input, { target: { value: 'BMW' } });
    
    expect(handleChange).toHaveBeenCalledWith('BMW');
  });

  it('відображає поточне значення', () => {
    render(<SearchBar value="Tesla" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(/пошук/i) as HTMLInputElement;
    expect(input.value).toBe('Tesla');
  });
});