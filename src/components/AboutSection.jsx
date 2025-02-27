import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AboutMeImage from "../assets/about_me.jpg";

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
      <Box id="about">
        <AboutContainer>
          <AboutContent>
            {/* 左側圖片區域 */}
            <ImageWrapper>
              <img
                src={AboutMeImage}
                alt="About Me"
              />
            </ImageWrapper>

            {/* 右側文字區域 */}
            <Box sx={{ maxWidth: "500px" }}>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                About
              </Typography>
              <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Experienced software engineer with 3+ years in software development, specializing in app development.
                Spearheaded projects that enhanced system performance by 32% and achieved a client satisfaction score of 4.6 out of 5.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Proficient in Python and JavaScript, with a strong foundation in engineering.
              </Typography>
            </Box>
          </AboutContent>
        </AboutContainer>
      </Box>
    </Container>
  );
};

export default AboutSection;
