import { renderHook, act } from '@testing-library/react';
import { useTheme } from './useTheme';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useTheme hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('повинен перемикати тему', () => {
    const { result } = renderHook(() => useTheme());
    
    // Початкова тема (залежить від системи, припустимо light)
    const initialTheme = result.current.theme;
    
    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).not.toBe(initialTheme);
    expect(document.documentElement.getAttribute('data-theme')).toBe(result.current.theme);
  });
});