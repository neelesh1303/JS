import { Routes, Route } from "react-router-dom";
import Login from './components/login';
import Profile from "./components/profile";
import Community from "./components/community";
import ProfileEditCreate from "./components/profile-edit";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Notification from "./components/notification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile-edit" element={<ProfileEditCreate />} />
      <Route path="/community" element={<Community />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
}

export default App;
