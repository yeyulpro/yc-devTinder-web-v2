import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { useProfileQuery } from "../apis/userApi";

export default function RequireAuth() {
  const { data: user, isLoading } = useProfileQuery();
  const location = useLocation();

  if (isLoading) return <Typography>Loading ...</Typography>;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <Box>
      <Outlet />
    </Box>
  );
}
