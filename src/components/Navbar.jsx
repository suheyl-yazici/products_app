import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Home Page
            </IconButton>
          </NavLink>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
            color="success"
          >
            Products App
          </Typography>
          <NavLink
            to="/newproduct"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button color="inherit">Add Product</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
