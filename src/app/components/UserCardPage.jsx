import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

export default function UserCardPage({ user, interestHandler, ignoreHandler }) {
  const { _id, first_name, last_name, photoUrl, about, age, gender } =
    user || {};

  return (
    <Card
      component={Paper}
      elevation={11}
      sx={{
        width: 350,
        height: 550,
        boxShadow: 1,
        bgcolor: "#1A2A4F",
        borderRadius: 3,
        border: "2px solid #0B192C",
        mb: 2,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardActionArea component={Link} to={`/user-profile/${_id}`} sx={{
        flexGrow: 1,
      }}>
        <CardMedia
          component="img"
          image={photoUrl}
          alt="user photo"
          sx={{
            p: 2, borderRadius: 7, height: 300,
            objectFit: "cover",
          }}

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
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
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
      <CardActions sx={{ justifyContent: "center" }}>
        <ButtonGroup
          size="small"
          variant="contained"
          sx={{ bgcolor: "#FF6500" }}
        >
          <Button
            sx={{ width: 150, bgcolor: "#FF6500", fontSize: "1.2rem", p: 0 }}
            onClick={ignoreHandler}
          >
            Ignore
          </Button>
          <Button
            variant="contained"
            onClick={interestHandler}
            sx={{
              color: "#FF6500",
              bgcolor: "#FFFF",
              width: 150,
              fontWeight: "border",
              fontSize: "1.2rem",
              p: 0,
            }}
          >
            Interested
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
