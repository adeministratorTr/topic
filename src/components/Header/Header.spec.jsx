import { render, screen } from '@testing-library/react';
import Header from './index';

describe('components/Header', () => {
  it('should render by default', () => {
    render(<Header />);

    expect(screen.getByTestId('Header')).toBeVisible();
  });
});
