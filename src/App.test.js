import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('tewsting to see if pokemon is there', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
