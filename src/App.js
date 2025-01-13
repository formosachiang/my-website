import React from "react";
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
    <div>
      <Header />
      <IntroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
