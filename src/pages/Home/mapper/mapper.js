const DIFFERENT_TEXT_SIZE_NUMBER = 6;

export function mapTopics(topics) {
  const popularityRange = {
    min: Math.min(...topics.map((t) => t.volume)),
    max: Math.max(...topics.map((t) => t.volume))
  };

  return topics.map(({ id, label, sentiment, sentimentScore, volume }) => {
    return {
      id,
      label,
      sentiment: {
        ...sentiment,
        score: sentimentScore,
        range: getScoreColor({ score: sentimentScore })
      },
      volume
    };
  });
}

function getScoreColor({ score }) {
  if (score > 60) return 'high';
  if (score > 40 && score < 60) return 'normal';
  return 'low';
}
