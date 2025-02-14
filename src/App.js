import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import FeedbackSection from "./components/FeedbackSection";
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
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
