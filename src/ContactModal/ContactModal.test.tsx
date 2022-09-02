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

test('Enables submit button after form is valid', () => {
  render(<ContactModal />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const emailInput = screen.queryByPlaceholderText('Email');
  const phoneInput = screen.queryByPlaceholderText('Phone');

  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput as HTMLElement, {target: { value: 'Port Exe'}});
  fireEvent.change(emailInput as HTMLElement, {target: { value: ''}});
  fireEvent.change(phoneInput as HTMLElement, {target: { value: 'prtexe@gmail.com'}});

  expect(nameInput).toHaveValue('Port Exe');
  expect(emailInput).toHaveValue('');
  expect(phoneInput).toHaveValue('prtexe@gmail.com');

  expect(submitButton).toBeDisabled();

  fireEvent.change(nameInput as HTMLElement, {target: { value: 'Adam Smith'}});
  fireEvent.change(emailInput as HTMLElement, {target: { value: '131-463-3876'}});
  fireEvent.change(phoneInput as HTMLElement, {target: { value: 'adamsmith@gmail.com'}});

  expect(nameInput).toHaveValue('Adam Smith');
  expect(emailInput).toHaveValue('131-463-3876');
  expect(phoneInput).toHaveValue('adamsmith@gmail.com');

  expect(submitButton).not.toBeDisabled();

});