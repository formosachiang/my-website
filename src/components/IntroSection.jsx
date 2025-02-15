import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IntroImage from "../assets/intro.jpg";

// 讓背景顏色覆蓋整個區域
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
        py: 18, // 預設的上下padding（桌面版）
        px: 8,  // 預設的左右padding（桌面版）
        backgroundColor: theme.palette.quaternary.main,
        [theme.breakpoints.down('sm')]: {
          py: 8, // 在手機版 (sm 以下) 時減少上下padding
        },
      }}
    >
      <Container maxWidth="lg">
        {/* 設置標題區塊 */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="textSecondary">
              Hey, I am John
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="textPrimary" sx={{ mt: 2 }}>
              I build <span style={{ color: theme.palette.primary.main }}>scalable software solutions</span> and improve user experiences
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mt: 3 }}>
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
              Let’s Connect
              <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
            </Button>
          </Grid>

          {/* 設置圖片區塊 */}
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <img
                src={IntroImage} // 替換成實際的圖片網址
                alt="John"
                style={{
                  maxWidth: "340px",  // 設定圖片最大寬度
                  height: "auto",     // 保持圖片比例
                  borderRadius: "15px",
                  display: "block",   // 使圖片為區塊元素
                  margin: "0 auto",   // 使圖片水平居中
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
