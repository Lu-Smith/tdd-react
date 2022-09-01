import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ContactModal from './ContactModal';

afterEach(cleanup);

test('Initializes empty form', () => {
  render(<ContactModal />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const emailInput = screen.queryByPlaceholderText('Email');
  const phoneInput = screen.queryByPlaceholderText('Phone');

  const submitButton = screen.getByText('Submit');

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
  expect(phoneInput).toHaveValue('');

  expect(submitButton).toBeDisabled();
});

test('Disables submit button until form is valid', () => {
  render(<ContactModal />);
  const submitButton = screen.getByText('Submit');
});