import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/logo.png"; // Import the logo image

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quaternary.main, // 使用 quaternary 背景色
        py: 6, // 上下內邊距
      }}
    >
      <Container maxWidth="lg">
        {/* 上半部分：logo 圖片和導航 */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
          <Grid item>
            {/* 這裡替換文字為圖片 */}
            <img src={logo} alt="Logo" style={{ width: "40px" }} />
          </Grid>

          {/* 中間導航項目 */}
          <Grid item sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <Grid container spacing={4} sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Portfolio
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  About me
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Contact
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Testimonials
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* 社交媒體圖標 */}
          <Grid item>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <IconButton href="#" color="primary">
                  <FacebookIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#" color="primary">
                  <InstagramIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="#" color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 分隔線 */}
        <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, mb: 3 }} />

        {/* 下半部分：版權訊息和隱私政策等選項 */}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Made by Yen 2025. All rights reserved.
            </Typography>
          </Grid>

          {/* 隱私政策等選項 */}
          <Grid item>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ mr: 3, textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ mr: 3, textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Terms of Service
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary" sx={{ textDecoration: "none", "&:hover": { color: theme.palette.primary.main } }}>
                  Cookies Settings
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
