import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ContactModal from './ContactModal';

afterEach(cleanup);

test('Initializes empty form', () => {
  render(<ContactModal />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const emailInput = screen.queryByPlaceholderText('Email');
  const phoneInput = screen.queryByPlaceholderText('Phone');

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
  expect(phoneInput).toHaveValue('');
});