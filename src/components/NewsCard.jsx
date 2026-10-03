import { useState } from "react";

export default function NewsCard({ article }) {
  const { title, description, url, urlToImage, source } = article;
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      {urlToImage && !imageError ? (
        <img
          src={urlToImage}
          alt={title || "News article image"}
          onError={() => setImageError(true)}
          className="w-full h-48 object-cover shrink-0"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
          <span className="text-gray-500 dark:text-gray-400 text-sm">No Image Available</span>
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {description ? description.slice(0, 120) + "..." : "No description available."}
        </p>
        <div className="mt-auto">
          <p className="text-xs text-gray-500 mb-2">Source: {source?.name || "Unknown"}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
