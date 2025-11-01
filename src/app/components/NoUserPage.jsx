import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function NoUserPage() {
  return (
    <Paper sx={{ borderRadius: 8, bgcolor: '#000000' }} elevation={8}>
      <Box sx={{ display: "flex", justifyContent: "center", height: "50" }}>
        <Typography variant="h3" color="#FFFF" sx={{ alignSelf: "center", fontFamily: 'cursive' }}>
          No one available
        </Typography>
      </Box>

      <Box
        elevation={5}
        component="img"
        src="/images/noOne.jpg"
        sx={{ width: 400, height: 300, borderRadius: 8, p: 2 }}
      />
    </Paper>
  );
}
