export default function NewsCard({ article }) {
  const { title, description, url, urlToImage, source } = article;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {description ? description.slice(0, 120) + "..." : "No description available."}
        </p>
        <p className="text-xs text-gray-500 mb-2">Source: {source?.name}</p>
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
  );
}
