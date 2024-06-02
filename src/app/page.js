import { Container, Grid, Box, Typography, Divider } from "@mui/material";
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar";

const HomePage = () => {
  return (
    <Box className="bg-gradient-to-b from-gray-700 to-zinc-800 min-h-screen">
      {/* Header Section */}
      <Box className="text-white py-6">
        {" "}
        {/* Changed bg-blue-600 to bg-blue-300 */}
        <Container>
          <Typography variant="h2" align="center" className="font-bold mb-2">
            Welcome to Our News Portal
          </Typography>
          <Typography variant="h5" align="center" className="mb-4">
            Stay updated with the latest news and stories
          </Typography>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Container className="py-6">
        <Grid container spacing={6}>
          {/* Latest News Section */}
          <Grid item xs={12} md={8}>
            <LatestNews />
          </Grid>

          {/* Sidebar Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" className="mb-4 text-blue-600">
              Trending News
            </Typography>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>

      <Divider />
    </Box>
  );
};

export default HomePage;
