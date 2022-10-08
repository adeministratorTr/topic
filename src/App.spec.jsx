import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render by default', () => {
    render(<App />);
    expect(screen.getByTestId('App')).toBeVisible();
  });
});
