
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router";
import Button from "@mui/material/Button";

export default function NobodyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isNoInterested = location.pathname === "/connect-request";
  const isNoConnected = location.pathname === "/connections";

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/images/nobody.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          bgcolor: "rgba(0,0,0,0.5)",
          p: 3,
          borderRadius: 2,
        }}
      >
        Hmmm... 🙄
      </Typography>
      {isNoInterested && (
        <>
          <Typography
            variant="h3"
            sx={{
              bgcolor: "rgba(0,0,0,0.2)",
              p: 1,
              borderRadius: 2,
            }}
          >
            No one is interested in you...😢
          </Typography>
          <Typography variant="h6" sx={{ mt: 7 }}>
            You show interest in people first!
          </Typography>
        </>
      )}
      {isNoConnected && (
        <>
          <Typography
            variant="h3"
            sx={{
              bgcolor: "rgba(0,0,0,0.5)",
              p: 3,
              borderRadius: 2,
            }}
          >
            You do not have any connections yet...😢
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Try connecting with someone new!
          </Typography>
        </>
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        onClick={() => navigate("/feeds")}
      >
        Back to Feeds
      </Button>
    </Box>
  );
}
