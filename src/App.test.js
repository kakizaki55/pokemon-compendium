import { render, screen } from '@testing-library/react';
import App from './App';

test('', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon Header/i);
  expect(linkElement).toBeInTheDocument();
});
