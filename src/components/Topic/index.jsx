import PropTypes from 'prop-types';

import './style.css';

const Topic = ({ onClick, children, score, ...rest }) => (
  <p className={'topic-item ' + score} onClick={onClick} {...rest}>
    {children}
  </p>
);

Topic.defaultProps = {
  score: 'normal'
};

Topic.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  score: PropTypes.string
};

export default Topic;
