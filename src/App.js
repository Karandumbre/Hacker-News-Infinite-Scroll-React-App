import React, { useEffect, useState } from 'react';
import './App.css'
import { fetchStoryIds } from './services/HackerNewsApi';
import { Story } from './components/Story';
import { useInfiniteScroll } from './infiniteScroll/infiniteScroll';

export const App = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    fetchStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <div className='main'>
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </div>
    </>
  );
};