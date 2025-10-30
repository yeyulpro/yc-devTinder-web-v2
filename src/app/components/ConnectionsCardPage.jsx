import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

export default function ConnectionsCardPage({ user }) {
  const {_id, first_name, last_name, photoUrl, about, age, gender } = user || {};

  return (
    <Card
      component={Paper}
      elevation={11}
      sx={{
        width: 300,
        boxShadow: 1,
        bgcolor: "#FFB6C1",
        borderRadius: 3,
        border: "2px solid #FF4D6D",
      }}
    >
      <CardActionArea component={Link} to={`/user-profile/${_id}`}>
        <CardMedia
          component="img"
          height="290"
          image={photoUrl}
          alt="user photo"
          sx={{ p: 2, borderRadius: 3 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {age && gender && <>{age + ", " + gender}</>}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {about}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
