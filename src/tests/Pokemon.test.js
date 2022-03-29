import React from 'react';
import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o componente <Pokemon />', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokeOne = screen.getByTestId('pokemon-name');
    expect(pokeOne).toHaveTextContent('Pikachu');
  });
  it('O tipo correto do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);
    const pokType = screen.getByTestId('pokemon-type');
    expect(pokType).toHaveTextContent('Electric');
  });
  it('O peso médio do pokémon deve ser exibido na tela', () => {
    renderWithRouter(<App />);
    const pokeWeight = screen.getByTestId('pokemon-weight');
    expect(pokeWeight).toHaveTextContent('Average weight: 6.0 kg');
  });
  it('A imagem do Pokémon deve ser exibida', () => {
    renderWithRouter(<App />);
    const pokeImage = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(pokeImage).toHaveProperty(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
  });
  it('Testa se existe um link para detalhes', () => {
    renderWithRouter(<App />);
    const linkToDetails = screen.getByRole('link', { name: 'More details' });
    expect(linkToDetails).toHaveProperty('href', `${global.location.href}pokemons/25`);
  });
  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecio.', () => {
    const { history } = renderWithRouter(<App />);
    const linkToDetails = screen.getByRole('link', { name: 'More details' });

    userEvent.click(linkToDetails);
    expect(history.location.pathname).toBe('/pokemons/25');

    const title = screen.getByRole('heading', { name: 'Summary', level: 2 });
    expect(title).toBeInTheDocument();
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const favButton = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favButton);

    const favStar = screen.getByAltText('Pikachu is marked as favorite');
    expect(favStar).toBeInTheDocument();
    expect(favStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
