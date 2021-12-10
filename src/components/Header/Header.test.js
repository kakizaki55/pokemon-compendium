import { render } from '@testing-library/react';
import Header from './Header';

test('testing header', () => {
  const container = render(<Header />);

  expect(container).toMatchSnapshot();
});
