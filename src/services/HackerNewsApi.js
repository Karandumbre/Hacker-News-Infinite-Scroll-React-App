import axios from 'axios';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;
export const storyUrl = `${baseUrl}item/`;

export const fetchStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`);
  return result.data;
};

export const fetchStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);
  return result.data;
};
