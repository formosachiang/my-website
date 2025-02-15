import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quaternary.main, // 使用 quaternary 背景色
        py: 4, // 上下內邊距
      }}
    >
      <Container maxWidth="lg">
        {/* 上半部分：logo 和導航 */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
          <Grid item>
            <Typography variant="h6" fontWeight="bold" color="textPrimary">
              logoipsum
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3} sx={{ justifyContent: "flex-end" }}>
              <Grid item>
                <Link href="#" color="textSecondary">
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary">
                  Portfolio
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary">
                  About me
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary">
                  Contact
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary">
                  Testimonials
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="textSecondary">
                  Portfolio
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* 下半部分：社交圖標和版權訊息 */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Made with 💖 by Airdokan
            </Typography>
          </Grid>
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
                  <TwitterIcon />
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

        {/* 版權與其他設定 */}
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Grid item>
            <Link href="#" color="textSecondary" sx={{ mr: 3 }}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="textSecondary" sx={{ mr: 3 }}>
              Terms of Service
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="textSecondary">
              Cookies Settings
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
