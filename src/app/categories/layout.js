import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid, Typography } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <CategoryList />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h1"
              className="text-2xl text-pretty text-white"
            >
              {children}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
