export function mapTopics(topics) {
  const result = [];
  topics.forEach(({ id, label, sentiment, sentimentScore, volume }) => {
    const returnObject = {
      id,
      label,
      sentiment: {
        ...sentiment,
        score: sentimentScore
      },
      volume
    };
    result.push(returnObject);
  });
  return result;
}
