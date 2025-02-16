import React from "react";
import { Box, Grid, Card, CardContent, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PortfolioImage1 from "../assets/portfolio1.png";
import PortfolioImage2 from "../assets/portfolio2.png";
import PortfolioImage3 from "../assets/portfolio3.jpg";

// 專案資料
const projects = [
  {
    title: "Garbage Classification",
    description: "The project is focused on garbage classification, where I used LandingLens and YOLOv8 to classify images of different types of recyclable items.",
    image: PortfolioImage1,
    link: "https://github.com/matthewraylee/garbage_classification",
  },
  {
    title: "Meal Plan",
    description: "This project uses image recognition to identify items in your refrigerator and generate recipe suggestions through AI.",
    image: PortfolioImage2,
    link: "https://github.com/formosachiang/ai-project",
  },
  {
    title: "PannaCotta.Chloe",
    description: "This is a digital marketing project promoting a dessert brand, focusing on panna cotta drinks with a stylish and modern appeal.",
    image: PortfolioImage3,
    link: "https://github.com/formosachiang/PannaCotta.Chloe",
  },
];

// 自訂卡片樣式
const ProjectCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const ProjectsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 18 }}> {/* 增加底部空間 */}
      {/* 頂部標題區塊 */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box>
          <Typography variant="h6" color="textSecondary">
            Recent Projects
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            My Portfolio
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D14D72",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#C13B60" },
          }}
          href="https://github.com/formosachiang"
          target="_blank"
        >
          Visit My Github
        </Button>
      </Box>

      {/* 專案列表 */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
                  {project.description}
                </Typography>
                {/* 讓 "View In Github" 置左對齊 */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <Button
                    href={project.link}
                    target="_blank"
                    sx={{ textTransform: "none", fontWeight: "bold", display: "flex", alignItems: "center" }}
                  >
                    View In Github <ArrowOutwardIcon sx={{ fontSize: 18, ml: 1 }} />
                  </Button>
                </Box>
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
