import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CategoryList />
          </Grid>
          <Grid item xs={9}>
            <h1 className="text-2xl text-pretty text-white">{children}</h1>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
