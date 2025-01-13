import React from "react";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", padding: "20px", textAlign: "center" }}>
      <div style={{ marginBottom: "10px" }}>
        <Facebook style={{ margin: "0 10px", cursor: "pointer" }} />
        <Instagram style={{ margin: "0 10px", cursor: "pointer" }} />
        <Twitter style={{ margin: "0 10px", cursor: "pointer" }} />
        <LinkedIn style={{ margin: "0 10px", cursor: "pointer" }} />
      </div>
      <p>© 2025 My Portfolio. All Rights Reserved.</p>
      <nav>
        <a href="#privacy" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Privacy Policy</a>
        <a href="#terms" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Terms of Service</a>
        <a href="#cookies" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Cookie Settings</a>
      </nav>
    </footer>
  );
};

export default Footer;
