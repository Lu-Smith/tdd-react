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
  fireEvent.change(emailInput as HTMLElement, {target: { value: '131-463-4568'}});
  fireEvent.change(phoneInput as HTMLElement, {target: { value: 'prtexe@gmail.com'}});

  expect(nameInput).toHaveValue('Port Exe');
  expect(emailInput).toHaveValue('131-463-4568');
  expect(phoneInput).toHaveValue('prtexe@gmail.com');

  expect(submitButton).not.toBeDisabled();

});