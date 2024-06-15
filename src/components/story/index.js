import React, { useState, useEffect, memo } from "react";
import { fetchStory } from "api/fetch";
import { time } from "utils";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  async function fetchStories() {
    const stories = await fetchStory(storyId);
    setStory(stories);
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return story && story.url ? (
    <section className="story-wrapper">
      <h1 className="story-title">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h1>
      <div style={{ marginTop: "10px" }}>
        <span style={{ marginRight: "10px" }}>
          <span className="bold-italic">By:</span> {story.by}
        </span>
        <span>
          <span className="bold-italic">Posted:</span> {time(story.time)}
        </span>
      </div>
    </section>
  ) : null;
});
