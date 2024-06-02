"use client";
import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography, Link } from "@mui/material";
import Image from "next/image";

const LatestBitcoinNews = () => {
  const [bitcoinNews, setBitcoinNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=bitcoin&apiKey=32d85d1b7d584b9e880076e3771d72ff"
        );
        const data = await response.json();
        if (data.articles.length > 0) {
          setBitcoinNews(data.articles.slice(1, 4)); // Keep the top two articles
        }
      } catch (error) {
        console.error("Error fetching Bitcoin news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinNews();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      p={2}
    >
      {bitcoinNews.map((news, index) => (
        <Box key={index} maxWidth={600} m={1}>
          <Image
            src={news.urlToImage}
            alt={news.title}
            width={600}
            height={400}
            className="rounded-md"
          />
          <Typography variant="h5" gutterBottom>
            {news.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {news.description}
          </Typography>
          <Typography variant="body2" className="text-gray-200" gutterBottom>
            Published on: {new Date(news.publishedAt).toDateString()}
          </Typography>
          <Link href={news.url} target="_blank" rel="noopener noreferrer">
            Read More
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default LatestBitcoinNews;
