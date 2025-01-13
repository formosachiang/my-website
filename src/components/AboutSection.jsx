import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "100px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h2 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>About Me</h2>
        <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6" }}>
          I am a dedicated Product Designer with over 5 years of experience. My focus is on delivering exceptional user
          experiences and impactful brand strategies. I aim to bridge the gap between creativity and functionality, ensuring
          every design serves its purpose effectively.
        </p>
      </div>
      <img
        src="https://via.placeholder.com/300" // Replace with actual image URL
        alt="About Me"
        style={{ borderRadius: "10px", width: "300px", height: "auto" }}
      />
    </section>
  );
};

export default AboutSection;
