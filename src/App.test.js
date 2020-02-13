import React from 'react';
import { render } from '@testing-library/react';
import Pages from './components/Pages';

test('renders learn react link', () => {
  const { getByText } = render(<Pages />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
