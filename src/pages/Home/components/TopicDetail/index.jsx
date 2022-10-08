import PropTypes from 'prop-types';

import './style.css';

const TopicDetail = ({ text, total, positive, neutral, negative }) => (
  <>
    <p className="more-space">Information on Topic: {`"${text}"`}</p>
    <p className="more-space">Total mentions: {total}</p>
    <p className="detail">
      Positive Mentions: <span className="positive">{positive}</span>
    </p>
    <p className="detail">
      Neutral Mentions: <span className="neutral">{neutral}</span>
    </p>
    <p className="detail">
      Negative Mentions: <span className="negative">{negative}</span>
    </p>
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
