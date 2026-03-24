import { render, screen, fireEvent } from '@testing-library/react';
import { ReviewModal } from './ReviewModal';
import { describe, it, expect, vi } from 'vitest';

describe('ReviewModal', () => {
  it('передає дані форми при відправці', () => {
    const handleSubmit = vi.fn();
    render(<ReviewModal onClose={vi.fn()} onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText(/ваше ім'я/i), { target: { value: 'Олег' } });
    fireEvent.change(screen.getByPlaceholderText(/враженнями/i), { target: { value: 'Крута тачка' } });
    
    fireEvent.click(screen.getByText(/надіслати відгук/i));

    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
      reviewerName: 'Олег',
      comment: 'Крута тачка',
      rating: 5
    }));
  });
});