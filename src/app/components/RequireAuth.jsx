import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";


export default function RequireAuth() {
  const {isLoggedIn,isLoading} = useSelector((state) => state.account);
 
  const location = useLocation();
   if(isLoading) return <Typography>Loading...</Typography>
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace/>;
  }
 

  return (
    
    <Box>
      <Outlet />
    </Box>
  );
}
