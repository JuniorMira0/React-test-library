import React from 'react';
import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o componente <PokemonDetails.js />', () => {
  it('Teste se as informações do Pokémon selecionado são mostradas na tela.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const pokeName = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(pokeName).toBeInTheDocument();

    const titleHeading = screen.getByRole('heading', {
      name: /Summary/i,
      level: 2,
    });
    expect(titleHeading).toBeInTheDocument();

    const paragraph = screen.getByText(/This intelligent Pokémon/i);
    expect(paragraph).toBeInTheDocument();
    expect(moreDetails).not.toBeInTheDocument();
  });
  it('Testa se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Game Locations of/i,
    });
    expect(heading).toBeInTheDocument();

    const loc = screen.getAllByRole('img');
    expect(loc[1]).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
    );
    expect(loc[2]).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
    );
    expect(loc[1]).toHaveAttribute('alt', 'Pikachu location');
    expect(loc[2]).toHaveAttribute('alt', 'Pikachu location');
  });
  it('Testa se o usuário pode favoritar um pokémon na da página de detalhes.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const favButton = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favButton);

    const favStar = screen.getByAltText('Pikachu is marked as favorite');
    expect(favStar).toBeInTheDocument();
    expect(favStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
