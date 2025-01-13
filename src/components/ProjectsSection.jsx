import React from "react";

const projects = [
  {
    title: "E-Commerce App",
    description: "A seamless shopping experience with modern UI design.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Brand Identity",
    description: "Crafting a strong and unique brand identity for clients.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Social Media Platform",
    description: "Designing an intuitive and engaging social media app.",
    image: "https://via.placeholder.com/300",
  },
];

const ProjectsSection = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ fontSize: "32px", color: "#333", textAlign: "center", marginBottom: "40px" }}>
        Recent Projects
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              maxWidth: "300px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img src={project.image} alt={project.title} style={{ width: "100%" }} />
            <div style={{ padding: "20px" }}>
              <h4 style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>{project.title}</h4>
              <p style={{ fontSize: "16px", color: "#666" }}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
