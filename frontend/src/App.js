
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import VideoViewPage from "./pages/VideoViewPage";
import AdminDashboard from "./pages/AdminDashboard";
import Navigation from "./components/Navigation";
import QuizPage from "./pages/QuizPage";

import { AuthProvider } from "./context/AuthContext";

const RouterContent = () => {
  const navigate = useNavigate();

  // To allow LandingPage buttons to navigate
  const setCurrentPage = (page) => {
    switch (page) {
      case "dashboard":
        navigate("/dashboard");
        break;
      case "upload":
        navigate("/upload");
        break;
      case "auth":
        navigate("/login");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />

      <Routes>
        
        {/* ---------------- PUBLIC ROUTES ---------------- */}
        <Route 
          path="/" 
          element={<LandingPage setCurrentPage={setCurrentPage} />} 
        />

        <Route 
          path="/login" 
          element={<AuthPage setCurrentPage={setCurrentPage} />} 
        />

        {/* ---------------- PRIVATE ROUTES ---------------- */}

        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard setCurrentPage={setCurrentPage} />
            </PrivateRoute>
          } 
        />

        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <UploadPage />
            </PrivateRoute>
          }
        />

        <Route 
          path="/video/:id"
          element={
            <PrivateRoute>
              <VideoViewPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/quiz/:video_id" element={
          <PrivateRoute>
            <QuizPage />
          </PrivateRoute>
        } />

      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
