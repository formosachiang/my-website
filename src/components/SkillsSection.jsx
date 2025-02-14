import React from "react";
import { Box, Grid, Card, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";
// import { useTheme } from "@mui/material/styles";

const skills = [
  {
    title: "Strategy & Direction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: "Branding & Logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <BrushIcon fontSize="large" />,
  },
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <PaletteIcon fontSize="large" />,
  },
  {
    title: "Webflow Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    icon: <CodeIcon fontSize="large" />,
  },
];

// 自訂 Card 風格
const SkillCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "left", 
  backgroundColor: theme.palette.quaternary.main, // 修改為第四個顏色（背景色）
  transition: "all 0.3s ease-in-out",
  position: "relative",
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "4px",
      backgroundColor: theme.palette.tertiary.main, // 修改為第三個顏色（底線）
    },
  },
}));

const SkillsSection = () => {
  // const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          My Skills
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          My Expertise
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SkillCard>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {skill.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {skill.description}
                </Typography>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SkillsSection;
