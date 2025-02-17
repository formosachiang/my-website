import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography, Button } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo.png"; // Import the logo image

const Header = () => {
  const theme = useTheme(); // Access the theme
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Toggle the drawer state
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff", // Background color of the header
          color: theme.palette.primary.main, // Primary color from the theme
          borderBottom: "1px solid #e0e0e0", // Bottom border
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Align items with space between
            paddingX: { xs: "20px", md: "40px" }, // Responsive horizontal padding
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo} // Use the logo image
              alt="Logo"
              style={{ width: "50px", height: "50px", objectFit: "contain" }} // Logo dimensions
            />
          </Box>

          {/* Center: Navigation links (visible on medium and larger screens) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on small screens
              gap: "40px", // Space between navigation links
            }}
          >
            <Typography
              component="a"
              href="#home"
              sx={{
                fontSize: "16px", // Font size for links
                fontWeight: 500,
                textDecoration: "none", // Remove underline
                color: theme.palette.primary.main, // Primary color
                "&:hover": { textDecoration: "underline" }, // Underline on hover
              }}
            >
              Home
            </Typography>
            <Typography
              component="a"
              href="#portfolio"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                color: "#333", // Secondary color for links
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Portfolio
            </Typography>
            <Typography
              component="a"
              href="#about"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                color: "#333",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              About me
            </Typography>
            <Typography
              component="a"
              href="#Projects"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                color: "#333",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Projects
            </Typography>
          </Box>

          {/* Right: Contact Me button (visible on medium and larger screens) */}
          <Button
            variant="outlined"
            href="#contact"
            sx={{
              display: { xs: "none", md: "block" }, // Hide on small screens
              color: theme.palette.primary.main, // Primary color for text
              borderColor: theme.palette.primary.main, // Primary color for border
              borderRadius: "5px", // Rounded corners
              paddingX: "20px", // Horizontal padding
              "&:hover": {
                backgroundColor: theme.palette.primary.main, // Hover background color
                color: "#ffffff", // White text on hover
              },
            }}
          >
            Contact Me
          </Button>

          {/* Hamburger menu icon (visible on small screens) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }} // Show on small screens
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (side menu) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px", // Drawer width
            backgroundColor: "#ffffff", // Background color
          },
        }}
      >
        <List>
          <ListItem button component="a" href="#home" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#portfolio" onClick={handleDrawerToggle}>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component="a" href="#about" onClick={handleDrawerToggle}>
            <ListItemText primary="About me" />
          </ListItem>
          <ListItem button component="a" href="#testimonials" onClick={handleDrawerToggle}>
            <ListItemText primary="Testimonials" />
          </ListItem>
          <ListItem button component="a" href="#contact" onClick={handleDrawerToggle}>
            <ListItemText primary="Contact Me" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
