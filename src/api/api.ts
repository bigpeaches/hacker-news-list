import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const getHackerNewsList = async () => {
  const result = await axios.get(`${baseUrl}topstories.json?print=pretty`);
  const topStoryIds = result.data;
  const topStories = [];
  for (const id of topStoryIds) {
    const story = await getHackerNewsItem(id);
    if (story.url) {
      topStories.push(story);
    }
    if (topStories.length === 100) {
      break;
    }
  }
  return topStories;
};

export const getHackerNewsItem = async (id: string) => {
  const result = await axios.get(`${baseUrl}item/${id}.json?print=pretty`);
  return result.data;
};
