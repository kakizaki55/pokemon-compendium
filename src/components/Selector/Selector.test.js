import { render, screen } from '@testing-library/react';
import Selector from './Selector';

test('', () => {
  const container = render(
    <Selector
      query="ab"
      setQuery="setQuery"
      type="fire"
      setType="setType"
      order="asc"
      setOrder="setOrder"
      isLoading={true}
      setIsLoading="setIslaoding"
    />
  );

  expect(container).toMatchSnapshot();
});
