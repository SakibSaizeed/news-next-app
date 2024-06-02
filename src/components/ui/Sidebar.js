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
        "https://the-news-portal-server.vercel.app/news/?category"
      );
      const data = await response.json();
      if (data.status) {
        setNewsData(data.data.slice(0, 4)); // Only keep the top 4 articles
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 m-4">
      {newsData.map((article, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md bg-white"
        >
          {/* Displaying news thumbnail */}
          {article.thumbnail_url && (
            <div className="relative h-40">
              <Image
                src={article.thumbnail_url}
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
            <p className="text-gray-500 text-sm mt-2">{article.author.name}</p>
            <p className="text-gray-500 text-sm">
              {new Date(article.author.published_date).toDateString()}
            </p>
            <p className="text-gray-600 text-sm mt-4">
              {article.details.substring(0, 100)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
