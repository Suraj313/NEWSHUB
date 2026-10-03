# NewsHub

A React-based news application that fetches and displays news articles using NewsAPI, with category browsing and search functionality.

## Features

- Latest/top news headlines
- Category-based news browsing
- Search news by keyword
- Dark mode support (System preference)
- Responsive design
- Client-side routing
- Loading skeletons
- Error handling
- Empty result state
- Image fallback handling

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Axios
- NewsAPI

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── NewsList.jsx
│   └── NewsCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   └── Search.jsx
├── utils/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the project root
4. Add your API key:
   ```env
   VITE_NEWS_API_KEY=your_api_key_here
   ```
5. Start the development server with `npm run dev`

## Environment Variables

This application requires a `VITE_NEWS_API_KEY` to function.

**Note regarding security:** Because this is a client-side Vite application, the API key is exposed to the browser. This is acceptable for this portfolio/demo project, but production applications should use a backend/proxy approach to protect API credentials.

## Routes

- `/` — Home
- `/category/:category` — Category news
- `/search/:query` — Search results

## Future Improvements

- Pagination or Load More
- Advanced filtering
- Backend API proxy for protecting the API key

## License

This project is created for educational and portfolio purposes.
