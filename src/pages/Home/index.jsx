import { useEffect, useState } from 'react';

import TopicDetail from './components/TopicDetail';
import { getAllTopics } from 'services/topic';
import { mapTopics } from './mapper';

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
      <div className="container">
        <div>
          {Array.isArray(topics) &&
            topics.length > 0 &&
            topics.map((topic) => (
              <p key={topic.id} onClick={() => setSelectedTopic(topic)}>
                {topic.label}
              </p>
            ))}
        </div>
        <div>
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
