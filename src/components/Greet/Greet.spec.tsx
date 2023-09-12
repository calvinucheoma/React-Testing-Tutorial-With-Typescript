import { render, screen } from '@testing-library/react';
import Greet from './Greet';

//we can use 'it' instead of 'test' to run our tests
//'fit' replicates test.only method to run only that test in our file
//'xit' replicates test.skip method to skip that test from running temporarily in our file

describe('Greet', () => {
  fit('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe('Nested', () => {
    xit('renders with a name', () => {
      render(<Greet name="Chukwuma" />);
      const textElement = screen.getByText(/hello Chukwuma/i);
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe('Greet Test 2', () => {
  it('renders a paragraph test named boy', () => {
    render(<Greet />);
    const textElement = screen.getByText(/boy/i);
    expect(textElement).toBeInTheDocument();
  });
});
