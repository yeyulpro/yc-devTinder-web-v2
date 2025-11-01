import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";


export default function LoginUserProfileCard({ user }) {
  const { first_name, last_name, photoUrl, about, age, gender, skills } =
    user || {};

  return (
    <Card
      component={Paper}
      elevation={11}
      sx={{
        width: 350,
        minHeight: 550,
        boxShadow: 1,
        bgcolor: "#14213d",
        borderRadius: 3,
        border: "2px solid #979dac",
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
        
      <CardMedia
        component="img"
        image={photoUrl}
        alt="user photo"
         sx={{
      height: 300, 
      objectFit: "cover",
    }}
      />
      <CardContent sx={{
        flexGrow: 1,
      }}>
        <Box  sx={{display:'flex', gap:2, mt: 1,alignItems:'center' }}>
          <Chip label="Name" sx={{ bgcolor: '#E67E22' ,  color: '#0B192C', fontWeight:'bolder'}} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: "capitalize", color: "#FFFF" }}
          >
            {`${first_name} ${last_name}`}
          </Typography>
        </Box>
        <Box sx={{display:'flex', gap:2, mt: 1,alignItems:'center' }}>
          <Chip label="Age" sx={{ bgcolor: '#E67E22',  color: '#0B192C', fontWeight:'bolder' }} />
          <Typography variant="body2" sx={{ color: '#FFFF', pl: 2 }} >
            {age}
          </Typography>
        </Box>
        <Box  sx={{display:'flex', gap:2, mt: 1,alignItems:'center'}}>
          <Chip label="Gender" sx={{ bgcolor: '#E67E22' ,  color: '#0B192C', fontWeight:'bolder'}} />
          <Typography variant="body2" sx={{ color: '#FFFF' }}>
            {gender}
          </Typography>
        </Box>
        <Box  sx={{display:'flex', gap:2, mt: 1 ,alignItems:'center'}}>
          <Chip label="About" sx={{ bgcolor: '#E67E22',  color: '#0B192C', fontWeight:'bolder' }} />
          <Typography
            variant="body2"

            sx={
              {
                display: "-webkit-box",
                // WebkitLineClamp: 6, // 최대 2줄
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: '#FFFF',
                pl: 1
              }
            }
          >
            {about}
          </Typography>
        </Box>
        <Box  sx={{display:'flex', gap:2, mt: 1 ,alignItems:'center'}}>
          <Chip label="Skills" sx={{ bgcolor: '#E67E22' ,  color: '#0B192C', fontWeight:'bolder'}} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: '#FFFF',
              pl: 2

            }}
          >
            {skills}
          </Typography>
        </Box>
      </CardContent>
       
    </Card>
  );
}
