import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

export default function RequireAuth() {

  const { isLoggedIn, isLoading } = useSelector((state) => state.account);
  const location = useLocation();

  if (isLoading) return <Typography>Require auth Loading...</Typography>
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return (

    <Box>
      <Outlet />
    </Box>
  );
}
