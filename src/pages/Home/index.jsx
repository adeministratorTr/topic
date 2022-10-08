import { useEffect, useState } from 'react';
import { TagCloud } from 'react-tagcloud';

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

  const renderTopicItem = (topic) => (
    <Topic key={topic.id} score={topic.sentiment.range} popularity={topic.popularity}>
      {topic.value}
    </Topic>
  );

  return (
    <div data-testid="Home">
      <h1>My Topics</h1>
      <div className="home-page-container">
        <div className="topic-cloud-container" data-testid="TopicList">
          {Array.isArray(topics) && topics.length > 0 && (
            <TagCloud
              tags={topics}
              minSize={1}
              maxSize={1}
              renderer={(topic) => renderTopicItem(topic)}
              onClick={(topic) => setSelectedTopic(topic)}
            />
          )}
        </div>
        <div className="topic-detail-container">
          {selectedTopic && selectedTopic.id && (
            <TopicDetail
              text={selectedTopic.value}
              total={selectedTopic.count}
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
