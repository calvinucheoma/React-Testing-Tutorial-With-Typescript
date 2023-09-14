import { screen, render } from '@testing-library/react';
import { MuiMode } from './Mui-mode';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent('dark mode');
  });
});
