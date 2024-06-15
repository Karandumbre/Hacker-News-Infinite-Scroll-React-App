import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchStoryIds } from "api/fetch";
import { Story } from "components/story";
import { useInfiniteScroll } from "hooks/useInfiniteScroll";

export const App = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    fetchStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <div className="main">
        <h1>News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </div>
    </>
  );
};
