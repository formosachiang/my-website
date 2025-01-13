import React from "react";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#333", color: "white" }}>
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>My Portfolio</div>
      <nav>
        <a href="#home" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</a>
        <a href="#portfolio" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Portfolio</a>
        <a href="#about" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>About Me</a>
        <a href="#contact" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
