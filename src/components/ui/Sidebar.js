"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=32d85d1b7d584b9e880076e3771d72ff"
      );
      const data = await response.json();
      setNewsData(data.articles.slice(0, 4)); // Only keep the top 4 articles
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 m-4">
      {newsData.map((article, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md bg-white"
        >
          {/* Displaying news thumbnail */}
          {article.urlToImage && (
            <div className="relative h-40">
              <Image
                src={article.urlToImage}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          )}
          {/* Displaying news title */}
          <div className="p-4">
            <p className="text-gray-700 text-lg font-semibold">
              {article.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
