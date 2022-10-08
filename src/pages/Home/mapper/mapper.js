// if you are changing this number, Dont forget to update Topic component style/classname
const DIFFERENT_TEXT_SIZE_NUMBER = 6;

export function mapTopics(topics) {
  const min = Math.min(...topics.map((t) => t.volume));
  const max = Math.max(...topics.map((t) => t.volume));
  const difference = Math.round((max - min) / DIFFERENT_TEXT_SIZE_NUMBER);

  return topics.map(({ id, label, sentiment, sentimentScore, volume }) => {
    return {
      id,
      value: label,
      sentiment: {
        ...sentiment,
        score: sentimentScore,
        range: getScoreColor({ score: sentimentScore })
      },
      count: volume,
      popularity: getPopularityCategory({
        volume,
        difference
      })
    };
  });
}

function getScoreColor({ score }) {
  if (score > 60) return 'high';
  if (score > 40 && score < 60) return 'normal';
  return 'low';
}

function getPopularityCategory({ volume, difference }) {
  return Math.round(volume / difference);
}
