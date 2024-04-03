import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile1 from "./profile1";
import Linkprofile from "./linkprofile";
import Formprofile from "./formprofile";

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
          path="/profile/:id"
          element={<Linkprofile profiles={profiles} setProfiles={setProfiles}/>}
        />
        <Route
          path="/formprofile"
          element={<Formprofile profiles={profiles} setProfiles={setProfiles} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
