import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../assets/logonew.jpg";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "About",
    pathname: "/about",
  },

  {
    route: "Categories",
    pathname: "/categories/news?category=all-news",
  },
];

function Navbar() {
  return (
    <AppBar position="static" className="bg-zinc-800" sx={{ height: "70px" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {navItems.map((item) => (
              <Link key={item.route} href={item.pathname}>
                <Button color="inherit">{item.route}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
