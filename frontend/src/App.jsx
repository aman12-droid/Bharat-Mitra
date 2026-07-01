import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AIChat from "./pages/AIChat";
import Schemes from "./pages/Schemes";
import Complaints from "./pages/Complaints";
import Admin from "./pages/Admin";
import Complaint from "./pages/Complaint";
import MyComplaints from "./pages/MyComplaints";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai-chat" element={<AIChat />} />  
      <Route path="/schemes" element={<Schemes />} />  
      <Route path="/complaints" element={<Complaints />} />  
      <Route path="/admin" element={<Admin />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/my-complaints" element={<MyComplaints />} />    </Routes>
  );
}

export default App;