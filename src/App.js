import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile1 from "./profile1";
import Linkprofile from "./linkprofile";

function App() {
  const [profiles, setProfiles] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Profile1 profiles={profiles} setProfiles={setProfiles} />}
        />
        <Route
          path="/profile/:index"
          element={<Linkprofile profiles={profiles} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
