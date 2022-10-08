import PropTypes from 'prop-types';

import './style.css';

const TopicDetail = ({ text, total, positive, neutral, negative }) => (
  <div data-testid="TopicDetail">
    <p className="important">Information on Topic{`"${text}":`}</p>
    <p className="important">Total mentions: {total}</p>
    <p className="detail">
      Positive Mentions: <span className="positive">{positive}</span>
    </p>
    <p className="detail">
      Neutral Mentions: <span className="neutral">{neutral}</span>
    </p>
    <p className="detail">
      Negative Mentions: <span className="negative">{negative}</span>
    </p>
  </div>
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
