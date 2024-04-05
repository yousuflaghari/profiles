import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./pages/profiles";
import Profile from "./pages/profile";
import Addprofile from "./pages/addprofile";

function App() {
  const [profiles, setProfiles] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Profiles profiles={profiles} setProfiles={setProfiles} />}
        />
        <Route
          path="/profile/:id"
          element={<Profile profiles={profiles} setProfiles={setProfiles} />}
        />
        <Route
          path="/formprofile"
          element={<Addprofile profiles={profiles} setProfiles={setProfiles} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
