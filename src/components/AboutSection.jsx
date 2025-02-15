import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AboutMeImage from "../assets/about_me.png";

// 自訂樣式
const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
  padding: theme.spacing(5, 0),
}));

const AboutContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(16),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(3),
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "400px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "10%",
    left: "-10%",
    width: "100%",
    height: "100%",
    // backgroundColor: theme.palette.primary.main, // 使用 MUI 主題顏色
    clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
    zIndex: "-1",
  },
  "& img": {
    width: "100%",
    borderRadius: "10px",
  },
}));

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg">
      <AboutContainer>
        <AboutContent>
          {/* 左側圖片區域 */}
          <ImageWrapper>
            <img
              src={AboutMeImage} // 替換成你的圖片
              alt="About Me"
            />
          </ImageWrapper>

          {/* 右側文字區域 */}
          <Box sx={{ maxWidth: "500px" }}>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              About
            </Typography>
            <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi a, euismod risus.
            </Typography>
          </Box>
        </AboutContent>
      </AboutContainer>
    </Container>
  );
};

export default AboutSection;
