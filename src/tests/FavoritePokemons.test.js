import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRoter from './renderWithRouter';
import FavoritePòkemons from '../components/FavoritePokemons';

describe('Testa o componente FavoritePòkemons', () => {
  renderWithRoter(<FavoritePòkemons />);
  it('Testa se é exibido na tela a mensagem No favorite pokemon found', () => {
    const notFound = screen.getByText(/No favorite pokemon found/i);

    expect(notFound).toBeInTheDocument();
  });
  it('Testa se é exibido todos os cards de pokémons favoritados.', () => {});
});
