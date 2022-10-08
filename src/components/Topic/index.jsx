import PropTypes from 'prop-types';

import './style.css';

const Topic = ({ onClick, children, score, popularity, ...rest }) => (
  <span
    className={`topic-item ${score} popularity-${popularity}`}
    data-testid="Topic"
    onClick={onClick}
    {...rest}
  >
    {children}
  </span>
);

Topic.defaultProps = {
  score: 'normal',
  popularity: 2
};

Topic.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  score: PropTypes.string,
  popularity: PropTypes.number
};

export default Topic;
