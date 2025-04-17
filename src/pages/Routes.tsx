// App.js or Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import LoginPage from "./auth/loginPage";
import ProtectedRoute from "../component/ProtectedRoute";
import UserType from "./auth/userType";
import CircleDraftForm from "./auth/playrFoam";
import Dashboard from "./player_dashboard/player_dashboard";
import Main from "./player_dashboard/main";



function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/usertype" element={
          <ProtectedRoute>
          
          <UserType />
          </ProtectedRoute>
          } />
        <Route path="/player" element={
          <ProtectedRoute>
          <CircleDraftForm />
          </ProtectedRoute>
          
          } />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        <Route path="/circle" element={
          <ProtectedRoute>
          <Main />
          </ProtectedRoute>
          } />


        {/* Example Protected Route */}
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        /> 
       
      </Routes>
    </Router>
  );
}

export default Pages;
