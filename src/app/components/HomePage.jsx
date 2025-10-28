import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
      {/* 배경 비디오 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src="/homeVideo.mp4" type="video/mp4" />
      </video>

      {/* 반투명 오버레이 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      {/* 클릭 가능한 중앙 텍스트 */}
      <Box
       
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "white",
          zIndex: 2,
          cursor: "pointer",
        }}
      >
        <Typography variant="h2" fontWeight="bold" textAlign="center">
          Love Love Love
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }} textAlign="center">
          Start with YC-Tinder
        </Typography>
      </Box>
    </Box>
  );
}
