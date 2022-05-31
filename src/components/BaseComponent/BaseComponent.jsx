import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Customer",
    route: "/customer?page=0&rowsPerPage=5&search=",
  }
];

const BaseComponent = ({ children }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box component="div" variant="div" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Test Application
            </Typography>

            <Box
              component="div"
              variant="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, idx) => (
                  <MenuItem key={idx} onClick={() => navigate(page.route)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Test Application
            </Typography>
            <Box
              component="div"
              variant="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page, idx) => (
                <Button
                  key={idx}
                  onClick={() => navigate(page.route)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="div" variant="div">
        <Typography component="div" variant="div" sx={{ p: 5 }}>
          {children}
        </Typography>
      </Box>
      <Box
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          color: "white",
          textAlign: "center",
          paddingBlock: "10px",
          backgroundColor: "black",
          margin: 0,
          zIndex: 9999,
        }}
      >
        © 2022. All Rights Reserved - Muhammad Moiz Siddique - Test application
      </Box>
    </Box>
  );
};

export default BaseComponent;
