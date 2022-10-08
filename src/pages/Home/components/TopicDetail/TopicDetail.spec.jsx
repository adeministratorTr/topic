import { render, screen } from '@testing-library/react';
import TopicDetail from './index';

describe('components/TopicDetail', () => {
  it('should render by default', () => {
    const props = {
      text: 'Sample Text',
      total: 10,
      positive: 3,
      neutral: 6,
      negative: 1
    };
    render(<TopicDetail {...props} />);
    const component = screen.getByTestId('TopicDetail');
    expect(component).toBeVisible();
    expect(component.childElementCount).toBe(5);
    expect(component.childNodes[0]).toHaveTextContent(props.text);
    expect(component.childNodes[1]).toHaveTextContent(props.total);
    expect(component.childNodes[2]).toHaveTextContent(props.positive);
    expect(component.childNodes[3]).toHaveTextContent(props.neutral);
    expect(component.childNodes[4]).toHaveTextContent(props.negative);
  });

  it('should render default props when numbers are not given', () => {
    const props = {
      text: 'Sample Text',
      total: 1,
      positive: 1
    };
    render(<TopicDetail {...props} />);
    const component = screen.getByTestId('TopicDetail');

    expect(component).toBeVisible();
    expect(component.childElementCount).toBe(5);
    expect(component.childNodes[0]).toHaveTextContent(props.text);
    expect(component.childNodes[1]).toHaveTextContent(props.total);
    expect(component.childNodes[2]).toHaveTextContent(props.positive);
    expect(component.childNodes[3]).toHaveTextContent(0);
    expect(component.childNodes[4]).toHaveTextContent(0);
  });
});
