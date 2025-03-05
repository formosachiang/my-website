import React from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
