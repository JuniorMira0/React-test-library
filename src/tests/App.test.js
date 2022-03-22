import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <App.js />', () => {
  it(`Testa se a aplicação é redirecionada para a página inicial,
    ao clicar no link Home .`, () => {
    const { history } = renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(linkToHome);

    expect(history.location.pathname).toBe('/');
  });
  it('Testa se a aplicação é redirecionada para a página de About,', () => {
    const { history } = renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkToHome);

    expect(history.location.pathname).toBe('/about');
  });
  it('Teste se a aplicação é redirecionada para a  URL /favorites', () => {
    const { history } = renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkToHome);

    expect(history.location.pathname).toBe('/favorites');
  });
  it('Teste se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('xablau');

    const notFound = screen.getByRole('heading', {
      level: 2,
      name: /not found/i,
    });

    expect(notFound).toBeInTheDocument();
  });
});
