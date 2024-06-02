import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer p-8 bg-gray-800 text-gray-300">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box mr={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-at-sign"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M16 12v1a4 4 0 0 1-8 0v-1"></path>
            <line x1="3" y1="10" x2="7" y2="10"></line>
            <line x1="17" y1="10" x2="21" y2="10"></line>
          </svg>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Sakib News Production.
          </Typography>
          <Typography variant="body2" color="textWarning">
            Providing reliable tech news since 2018
          </Typography>
        </Box>
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <Link href="#" color="inherit" className="mr-4">
          Facebook
        </Link>
        <Link href="#" color="inherit" className="mr-4">
          Twitter
        </Link>
        <Link href="#" color="inherit">
          LinkedIn
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
