import React from "react";

const IntroSection = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "100px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#333", marginBottom: "20px" }}>
        Hi, I'm John Doe
      </h1>
      <p style={{ fontSize: "20px", color: "#666", maxWidth: "600px", marginBottom: "40px" }}>
        A passionate Product Designer & Brand Strategist who loves creating meaningful experiences.
      </p>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Resume
      </button>
    </section>
  );
};

export default IntroSection;
