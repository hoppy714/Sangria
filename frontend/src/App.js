
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Shushi from "./pages/shushi/Shushi";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/shushi/:username" element={<Shushi />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
