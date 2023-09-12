import { render, screen } from '@testing-library/react';
import Greet from '../components/Greet/Greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe('Nested', () => {
    test('renders with a name', () => {
      render(<Greet name="Chukwuma" />);
      const textElement = screen.getByText(/hello Chukwuma/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe('Greet Test 2', () => {
  test('renders a paragraph test named boy', () => {
    render(<Greet />);
    const textElement = screen.getByText(/boy/i);
    expect(textElement).toBeInTheDocument();
  });
});
