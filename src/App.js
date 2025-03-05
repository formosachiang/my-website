import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <IntroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
