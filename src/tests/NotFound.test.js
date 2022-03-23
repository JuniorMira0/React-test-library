import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRoter from './renderWithRouter';
import NotFound from '../components/NotFound';

describe('Testa o componente <NotFound.js />', () => {
  renderWithRoter(<NotFound />);
  it('Teste se página contém um texto Page requested not found', () => {
    const headingH2 = screen.getByText(/Page requested not found/i);

    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByRole('img', {
      name: /Pikachu crying because the page/i,
    });

    expect(img).toHaveAttribute('src', url);
    expect(headingH2).toBeInTheDocument();
  });
});
