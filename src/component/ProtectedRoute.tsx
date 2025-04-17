// src/components/ProtectedRoute.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActiveAccount } from "thirdweb/react";

const ProtectedRoute = ({ children }) => {
  const account = useActiveAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (!account) {
      navigate("/"); // Redirect to home if not logged in
    }
  }, [account, navigate]);

  return account ? children : null; // Render children only if logged in
};

export default ProtectedRoute;
