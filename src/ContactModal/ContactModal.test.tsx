import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
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
  const nameInput = screen.queryByPlaceholderText('Name');
  const emailInput = screen.queryByPlaceholderText('Email');
  const phoneInput = screen.queryByPlaceholderText('Phone');

  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput as HTMLElement, {target: { value: 'Port Exe'}});
  fireEvent.change(emailInput as HTMLElement, {target: { value: '0131 48 58 68'}});
  fireEvent.change(phoneInput as HTMLElement, {target: { value: 'prtexe@email.com'}});

  expect(submitButton).not.toBeDisabled();

});