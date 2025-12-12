import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const inputName = screen.getByLabelText(/name/i)
  expect(inputName).toBeInTheDocument();
});

