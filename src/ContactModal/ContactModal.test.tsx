import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactModal from './ContactModal';

test('renders learn react link',async () => {
  render(<ContactModal />);
  const text = await screen.findByText('ContactModal');
  expect(text).toBeInTheDocument();
});