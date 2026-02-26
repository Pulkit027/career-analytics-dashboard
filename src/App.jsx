import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Internships from "./pages/Internships";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import MainLayout from "./layouts/MainLayout";

/*
  Simple route protection
*/
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Protected Pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/login" replace />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="internships" element={<Internships />} />
          <Route path="skills" element={<Skills />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </Router>
  );
}

export default App;