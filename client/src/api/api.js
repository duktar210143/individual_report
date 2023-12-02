import axios from 'axios';



export const getNews = (page = 1, limit = 10) => {
  const url = `https://api.zorsha.com.np/news?page=${page}&limit=${limit}`;
  return axios.get(url);
};
