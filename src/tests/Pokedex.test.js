import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRoter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRoter(<App />);
    const headingH2 = screen.getByText(/Encountered pokémons/i);
    expect(headingH2).toBeInTheDocument();
  });
  it('Testa se é exibido o próximo Pokémon quando o botão Próximo é clicado', () => {
    renderWithRoter(<App />);

    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(button);

    const nextPokemon = screen.getByText('Charmander');

    expect(nextPokemon).toBeInTheDocument();
  });
});
