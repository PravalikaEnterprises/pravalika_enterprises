import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
            </>
          }
        />
        {/* Optional: catch-all redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
