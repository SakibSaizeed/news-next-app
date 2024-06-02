import { getAllCategories } from "@/utils/getAllCategories";
import {
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  console.log(allCategories);

  return (
    <Container>
      <Typography variant="h4" component="h4" gutterBottom>
        Categories
      </Typography>
      <List>
        {allCategories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemButton>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  padding: "1rem",
                  fontSize: "1.25rem",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                <Link
                  href={`/categories/news?category=${category.title.toLowerCase()}`}
                >
                  {category.title}
                </Link>
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CategoryList;
