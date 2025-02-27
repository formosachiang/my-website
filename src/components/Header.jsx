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
import { Link } from "react-scroll"; // 使用 react-scroll 的 Link
import logo from "../assets/logo.png"; // 載入 logo 圖片

const Header = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: theme.palette.primary.main,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: { xs: "20px", md: "40px" },
          }}
        >
          {/* 左側 Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
          </Box>

          {/* 中間導覽連結 (中大型螢幕) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "40px",
            }}
          >
            <Link to="skills" smooth={true} duration={500}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                Skills
              </Typography>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                About
              </Typography>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                Projects
              </Typography>
            </Link>
            <Link to="resume" smooth={true} duration={500}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#000000",
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                Resume
              </Typography>
            </Link>
          </Box>

          {/* 右側 Contact Me 按鈕 */}
          <Button
            variant="outlined"
            href="#contact"
            sx={{
              display: { xs: "none", md: "block" },
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              borderRadius: "5px",
              paddingX: "20px",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "#ffffff",
              },
            }}
          >
            Contact Me
          </Button>

          {/* 小螢幕漢堡選單 */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (側邊選單) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#ffffff",
          },
        }}
      >
        {/* 
          1. 使 List 內容水平置中 (alignItems: 'center')
          2. marginTop 讓內容稍微往下移
        */}
        {/* 讓清單離頂端、左端一點距離，維持左對齊 */}
        <List sx={{ marginTop: "3rem", marginLeft: "2rem" }}>
          <ListItem
            button
            component={Link}
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "20px", color: "#000000", fontWeight: 500 }}>
                  Skills
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="about"
            smooth={true}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "20px", color: "#000000", fontWeight: 500 }}>
                  About
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "20px", color: "#000000", fontWeight: 500 }}>
                  Projects
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="resume"
            smooth={true}
            duration={500}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "20px", color: "#000000", fontWeight: 500 }}>
                  Resume
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            button
            component="a"
            href="#contact"
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "20px", color: "#000000", fontWeight: 500 }}>
                  Contact Me
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
