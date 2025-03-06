import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/my-website" element={<HomePage />} />
          <Route path="/content" element={<ContentPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
