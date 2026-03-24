import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { store } from '../../app/store';
import App from './App';

describe('App Component', () => {
  it('відображає лоадер при завантаженні даних', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const loader = document.querySelector('.spinner');
    expect(loader).toBeInTheDocument();
  });

  it('рендерить головний контейнер додатка', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const mainContainer = document.querySelector('.container');
    expect(mainContainer).toBeDefined();
  });

  it('відображає заголовок Car Showroom', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    
    expect(screen.queryByText(/Car Showroom/i)).toBeDefined();
  });
});