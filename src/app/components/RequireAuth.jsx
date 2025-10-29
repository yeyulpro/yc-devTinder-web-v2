import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function RequireAuth() {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    
    <Box>
      <Outlet />
    </Box>
  );
}
