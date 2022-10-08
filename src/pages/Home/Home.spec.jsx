import { fireEvent, render, screen } from '@testing-library/react';
import Home from './index';

describe('pages/Home', () => {
  it('should render by default', () => {
    render(<Home />);
    expect(screen.getByTestId('Home')).toBeVisible();
    expect(screen.getByTestId('TopicList')).toBeVisible();
    expect(screen.queryByTestId('TopicDetail')).not.toBeInTheDocument();
  });

  it('should show selected Topic', () => {
    render(<Home />);
    expect(screen.queryByTestId('TopicDetail')).not.toBeInTheDocument();

    const firstTopic = screen.getByTestId('TopicList').firstChild.firstChild;
    fireEvent.click(screen.getByText(firstTopic.textContent));

    expect(screen.getByText(firstTopic.textContent)).toBeVisible();
    expect(screen.queryByTestId('TopicDetail').childElementCount).toBeGreaterThanOrEqual(
      1
    );
  });
});
