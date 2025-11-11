import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

export default function ConnectionsCardPage({ user }) {
  const navigate = useNavigate();
  const { _id, first_name, last_name, photoUrl, about, age, gender } =
    user || {};

  return (
    <Box sx={{ position: "relative", width: 350, height: 500 }}>
      <Card
        component={Paper}
        elevation={11}
        sx={{
          width: 350,
          height: 500,
          boxShadow: 1,
          bgcolor: "#1A2A4F",
          borderRadius: 3,
          border: "2px solid #0B192C",
        }}
      >
        <CardActionArea component={Link} to={`/user-profile/${_id}`}>
          <CardMedia
            component="img"
            height="290"
            image={photoUrl}
            alt="user photo"
            sx={{ p: 2, borderRadius: 7 }}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize", color: "#FFFF" }}
            >
              {`${first_name} ${last_name}`}
            </Typography>
            <Typography variant="body2" color="#FFFF">
              {age && gender && <>{age + ", " + gender}</>}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#FFFF",
              }}
            >
              {about}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <IconButton
        color="secondary"
        aria-label="chat"
        size="large"
        sx={{
          position: "absolute",
          top: 280,
          right: 10,
        }}
        onClick={() => navigate(`/chat/${_id}`)}
      >
        <Chip
          label="Chat"
          variant="outlined"
          sx={{
            color: "#F39F5A",
            fontWeight: "bolder",
            "&:hover": { color: "#FFFF" },
            fontSize: "1.1rem",
          }}
        />
      </IconButton>
    </Box>
  );
}
