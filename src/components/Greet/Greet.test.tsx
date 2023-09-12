import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name="Chukwuma" />);
  const textElement = screen.getByText(/hello chukwuma/i);
  expect(textElement).toBeInTheDocument();
});
