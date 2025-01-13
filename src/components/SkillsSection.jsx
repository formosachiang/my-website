import React from "react";

const skills = [
  { skill: "UX/UI Design", level: "Expert" },
  { skill: "Branding", level: "Advanced" },
  { skill: "Prototyping", level: "Intermediate" },
  { skill: "Web Design", level: "Advanced" },
];

const SkillsSection = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ fontSize: "32px", color: "#333", textAlign: "center", marginBottom: "40px" }}>
        My Skills
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h4 style={{ fontSize: "20px", color: "#007BFF", marginBottom: "10px" }}>
              {skill.skill}
            </h4>
            <p style={{ fontSize: "16px", color: "#666" }}>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
