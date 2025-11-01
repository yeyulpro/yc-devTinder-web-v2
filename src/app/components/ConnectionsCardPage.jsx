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
  );
}
