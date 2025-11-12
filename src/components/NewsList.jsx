import { useEffect, useState } from "react";
import { fetchNews } from "../utils/api";
import NewsCard from "./NewsCard";

export default function NewsList({ category = "", query = "" }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(category, query);
      setArticles(data);
      setLoading(false);
    };
    getNews();
  }, [category, query]);

  if (loading)
    return <p className="text-center text-lg mt-8">Loading news...</p>;

  if (articles.length === 0)
    return (
      <p className="text-center text-lg mt-8 text-gray-500">
        No news articles found.
      </p>
    );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
