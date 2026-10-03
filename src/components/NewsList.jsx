import { useEffect, useState } from "react";
import { fetchNews } from "../utils/api";
import NewsCard from "./NewsCard";

export default function NewsList({ category = "", query = "" }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNews(category, query);
        setArticles(data);
      } catch (err) {
        setError("Failed to load news. Please check your connection or try again later.");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [category, query]);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full animate-pulse">
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 shrink-0"></div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4 flex-grow"></div>
              <div className="mt-auto">
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error)
    return (
      <div className="text-center mt-8 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
        <p className="text-lg">{error}</p>
      </div>
    );

  if (articles.length === 0)
    return (
      <div className="flex flex-col items-center justify-center mt-12 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
        <div className="text-4xl mb-4">📭</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No articles found</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
          We couldn't find any news matching your criteria. Try adjusting your search query or selecting a different category.
        </p>
      </div>
    );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {articles.map((article, index) => (
        <NewsCard key={article.url || index} article={article} />
      ))}
    </div>
  );
}
