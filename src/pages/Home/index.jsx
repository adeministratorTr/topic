import { useEffect, useState } from 'react';

import Topic from 'components/Topic';
import TopicDetail from './components/TopicDetail';
import { getAllTopics } from 'services/topic';
import { mapTopics } from './mapper/mapper';

import './style.css';

export default function Home() {
  const [topics, setTopics] = useState({});
  const [selectedTopic, setSelectedTopic] = useState({});

  useEffect(() => {
    const result = getAllTopics();
    setTopics(mapTopics(result.topics));
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <div className="home-page-container">
        <div>
          {Array.isArray(topics) &&
            topics.length > 0 &&
            topics.map((topic) => (
              <Topic
                key={topic.id}
                score={topic.sentiment.range}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic.label}
              </Topic>
            ))}
        </div>
        <div className="topic-detail-container">
          {selectedTopic && selectedTopic.id && (
            <TopicDetail
              text={selectedTopic.label}
              total={selectedTopic.volume}
              positive={selectedTopic.sentiment.positive}
              neutral={selectedTopic.sentiment.neutral}
              negative={selectedTopic.sentiment.negative}
            />
          )}
        </div>
      </div>
    </div>
  );
}
