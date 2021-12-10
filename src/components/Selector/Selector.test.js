import { render, screen } from '@testing-library/react';
import Selector from './Selector';

test('', () => {
  render(<Selector />);
  const linkElement = screen.getByText(/Pokemon Header/i);
  expect(linkElement).toMatchSnapshot();
});
