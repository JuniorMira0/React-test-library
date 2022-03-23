import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRoter from './renderWithRouter';
import About from '../components/About';

describe('Teste o componente <About.js />', () => {
  it('Testa se a página contém as informações sobre a Pokédex.', () => {
    renderWithRoter(<About />);

    const headingH2 = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/i,
    });

    expect(headingH2).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRoter(<About />);

    const text1 = screen.getByText(/This application simulates/i);
    const text2 = screen.getByText(/One can filter Pokémons/i);

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRoter(<About />);

    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const img = screen.getByRole('img');

    const alt = screen.getByAltText('Pokédex');

    expect(img).toHaveAttribute('src', url);
    expect(alt).toBeInTheDocument();
  });
});
