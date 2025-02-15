import React from "react";
import { Box, Grid, Card, CardContent, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Portfolio1Image from "../assets/portfolio1.png";
import Portfolio2Image from "../assets/portfolio2.png";
import Portfolio3Image from "../assets/portfolio3.png";

// 專案資料
const projects = [
  {
    title: "Ahuse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: Portfolio1Image,
    link: "https://dribbble.com",
  },
  {
    title: "App Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: Portfolio2Image,
    link: "https://dribbble.com",
  },
  {
    title: "Easy Rent",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: Portfolio3Image,
    link: "https://dribbble.com",
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
          href="https://dribbble.com"
          target="_blank"
        >
          Visit My Dribbble
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
                {/* 讓 "View In Dribbble" 置左對齊 */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <Button
                    href={project.link}
                    target="_blank"
                    sx={{ textTransform: "none", fontWeight: "bold", display: "flex", alignItems: "center" }}
                  >
                    View In Dribbble <ArrowOutwardIcon sx={{ fontSize: 18, ml: 1 }} />
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
