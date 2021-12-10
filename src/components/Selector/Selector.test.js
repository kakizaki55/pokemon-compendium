import { render } from '@testing-library/react';
import Selector from './Selector';

test('just making sure the selectored is being renderd correctly', () => {
  const typesObj = {
    type: 'fire',
  };
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
      types={[typesObj]}
    />
  );

  expect(container).toMatchSnapshot();
});
