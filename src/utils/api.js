import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (category = "", query = "") => {
  try {
    let url = "";

    if (query) {
      url = `${BASE_URL}/everything?q=${query}&language=en&apiKey=${API_KEY}`;
    } else if (category) {
      url = `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    } else {
      url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
    }

    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
