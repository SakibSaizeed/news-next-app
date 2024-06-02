export const getCategoryNews = async (category) => {
  const response = await fetch(
    `https://the-news-portal-server.vercel.app/news/?category=${category}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
};
