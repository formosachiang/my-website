import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll"; // Import Link from react-scroll
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
            <Link
              to="skills"
              smooth={true}
              duration={500} // Smooth scroll with 500ms duration
            >
              <Typography
                sx={{
                  fontSize: "16px", // Font size for links
                  fontWeight: 500,
                  textDecoration: "none", // Remove underline
                  color: "#000000", // Black color for links
                  "&:hover": { textDecoration: "underline" }, // Underline on hover
                  cursor: "pointer", // Change cursor to pointer on hover
                }}
              >
                Skills
              </Typography>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000", // Black color for links
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer", // Change cursor to pointer on hover
                }}
              >
                About me
              </Typography>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000", // Black color for links
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer", // Change cursor to pointer on hover
                }}
              >
                Projects
              </Typography>
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000", // Black color for links
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer", // Change cursor to pointer on hover
                }}
              >
                Resume
              </Typography>
            </Link>
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
          <ListItem button component="a" href="#skills" onClick={handleDrawerToggle}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button component="a" href="#about" onClick={handleDrawerToggle}>
            <ListItemText primary="About me" />
          </ListItem>
          <ListItem button component="a" href="#projects" onClick={handleDrawerToggle}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="#resume" onClick={handleDrawerToggle}>
            <ListItemText primary="Resume" />
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
