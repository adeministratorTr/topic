import { render, screen } from '@testing-library/react';
import Topic from './index';

describe('components/Topic', () => {
  it('should render by default', () => {
    render(<Topic>test</Topic>);
    const component = screen.getByTestId('Topic');
    expect(component).toBeVisible();
    expect(component).toHaveClass('popularity-2');
    expect(component).toHaveClass('topic-item');
    expect(component).toHaveClass('normal');
  });

  it('should render with custom props', () => {
    render(
      <Topic popularity={5} score={'high'}>
        test
      </Topic>
    );
    const component = screen.getByTestId('Topic');
    expect(component).toBeVisible();
    expect(component).toHaveClass('popularity-5');
    expect(component).toHaveClass('high');
  });
});
