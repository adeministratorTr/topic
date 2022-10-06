import PropTypes from 'prop-types';

import './style.css';

const TopicDetail = ({ text, total, positive, neutral, negative }) => (
  <>
    <p className="more-space">Information on Topic: {`"${text}"`}</p>
    <p className="more-space">Total mentions: {total}</p>
    <p className="less-space">Positive Mentions: {positive}</p>
    <p className="less-space">Neutral Mentions: {neutral}</p>
    <p className="less-space">Negative Mentions: {negative}</p>
  </>
);

TopicDetail.defaultProps = {
  positive: 0,
  neutral: 0,
  negative: 0
};

TopicDetail.propTypes = {
  text: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number,
  neutral: PropTypes.number,
  negative: PropTypes.number
};

export default TopicDetail;
