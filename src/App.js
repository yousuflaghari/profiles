import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile1 from "./profile1";
import Linkprofile from "./linkprofile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile1 />} />
        <Route
          path="/profile/:index"
          element={<Linkprofile profiles={profiles[index]} index={index} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
