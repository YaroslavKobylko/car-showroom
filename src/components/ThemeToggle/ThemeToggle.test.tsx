import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';
import { describe, it, expect } from 'vitest';

describe('ThemeToggle', () => {
  it('змінює іконку при натисканні', () => {
    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    const initialIcon = button.textContent;
    
    fireEvent.click(button);
    
    expect(button.textContent).not.toBe(initialIcon);
  });
});