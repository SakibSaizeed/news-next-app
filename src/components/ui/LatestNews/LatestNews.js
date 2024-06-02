"use client";
import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Box,
  Typography,
  Link,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Image from "next/image";

const LatestBitcoinNews = () => {
  const [bitcoinNews, setBitcoinNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinNews = async () => {
      try {
        const response = await fetch(
          "https://the-news-portal-server.vercel.app/news/?category=sports"
        );
        const data = await response.json();
        if (data.status) {
          setBitcoinNews(data.data.slice(0, 3)); // Keep the top three articles
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
      <Typography variant="h4" gutterBottom>
        Breaking News
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {bitcoinNews.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className="rounded-lg overflow-hidden shadow-md"
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia>
                <div className="relative h-40">
                  {news.thumbnail_url ? (
                    <Image
                      src={news.thumbnail_url}
                      alt={news.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  ) : (
                    <Box
                      height={200}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="h6" color="textSecondary">
                        No Image Available
                      </Typography>
                    </Box>
                  )}
                </div>
              </CardMedia>
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {news.details.substring(0, 100)}...
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "auto" }}
                >
                  Published on:{" "}
                  {new Date(news.author.published_date).toDateString()}
                </Typography>
                <Link href={news.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestBitcoinNews;
