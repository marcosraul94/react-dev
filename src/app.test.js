import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/App';

it('Test', () => {
  const { getByText } = render(<App />);
  getByText('Hello World');
});
