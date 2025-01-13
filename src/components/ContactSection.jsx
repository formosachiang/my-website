import React from "react";

const ContactSection = () => {
  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "#007BFF",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Get in Touch</h2>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Have a project in mind? Let's collaborate and create amazing things together.
      </p>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "16px",
          backgroundColor: "#ffffff",
          color: "#007BFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Contact Me
      </button>
    </section>
  );
};

export default ContactSection;
