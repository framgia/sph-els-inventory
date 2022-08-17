import React from "react";
import WelcomePage from "./pages/welcome";
import DashboardPage from "./pages/dashboard";
import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItemPage from "./pages/add-item";
import DisplayUsersPage from "./pages/display-users";
import EditUserPage from "./pages/edit-user";
import EditItemPage from "./pages/edit-item";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/edit-user-page" element={<EditUserPage />} />
        <Route path="/display-users" element={<DisplayUsersPage />} />
        <Route path="/edit-item" element={<EditItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
