// import { screen, render } from '@testing-library/react';
import { screen, render } from '../../test-utils';
import { MuiMode } from './Mui-mode';
// import { AppProviders } from '../Providers/AppProviders';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    // render(<MuiMode />, { wrapper: AppProviders });
    render(<MuiMode />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toHaveTextContent('dark mode');
  });
});
