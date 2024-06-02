export const getAllCategories = async () => {
  const response = await fetch(
    `https://the-news-portal-server.vercel.app/categories`
  );
  const data = await response.json();
  return data;
};
