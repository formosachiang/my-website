import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IntroImage from "../assets/intro.jpg";
import BackgroundVideo from "../assets/video.mp4";

// 讓圖片區塊的容器設定樣式
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const IntroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative", // 讓內部的絕對定位元素以此為參考
        py: 18,
        px: 8,
        overflow: "hidden", // 隱藏超出範圍的影片部分
        [theme.breakpoints.down("sm")]: {
          py: 8,
        },
      }}
    >
      {/* 背景影片 */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.4)",
          zIndex: -1,
        }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="white">
              Hey, I am Yen Wu
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="white" sx={{ mt: 2 }}>
              I build{" "}
              <span style={{ color: "#5E3BEE" }}>
                scalable software solutions
              </span>{" "}
              and improve user experiences
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 3 }}>
              As a Software Engineer, I specialize in building high-performance applications and contributing to innovative tech solutions.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.tertiary.main,
                color: "white",
                mt: 3,
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: theme.palette.tertiary.dark },
              }}
            >
              View Content
              <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageContainer>
              <img
                src={IntroImage}
                alt="YenWu"
                style={{
                  maxWidth: "340px",
                  height: "auto",
                  borderRadius: "15px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroSection;
