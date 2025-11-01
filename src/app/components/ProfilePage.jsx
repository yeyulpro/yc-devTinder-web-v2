import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import {
  useConnectionsQuery,
  useGetAllFeedQuery,
  useConnectionRequestQuery,
} from "../apis/matchingApi";

export default function ProfilePage() {
  const { profileId } = useParams();
  console.log("profileId type" + typeof profileId);
  const { data: feedData, isLoading: feedLoading } = useGetAllFeedQuery();
  const { data: connectionData, isLoading: connectedLoading } =
    useConnectionsQuery();
  const { data: interestedRequest, isLoading: requestLoading } =
    useConnectionRequestQuery();

  const feed = feedData?.feedList?.find((user) => user?._id === profileId);
  const connections = connectionData?.find((user) => user?._id === profileId);
  const interestedInMe = interestedRequest?.receivedRequests?.find(
    (user) => user?.fromUserId?._id?.toString() === profileId
  );

  const userProfile = feed || connections || interestedInMe?.fromUserId;

  if (feedLoading || connectedLoading || requestLoading)
    return <Typography>Loading ...</Typography>;
  if (!userProfile) return <Typography>No data ...</Typography>;

  const { first_name, last_name, photoUrl, about, age, gender, skills } =
    userProfile;

  return (
    <Box sx={{ display: "flex", width: "1000px", gap: 3 }}>
      <Avatar
        src={photoUrl}
        alt={`${first_name} ${last_name}`}
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
           border: '4px solid #0B192C',
          
        }}
      />

      <Box>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              width: 150,
              fontSize: "1.2rem",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#FFFF",
            }}
          >
            Name
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              textTransform: "capitalize",
              paddingY: 2,
              fontFamily: "cursive",
              color: "#FFA851",
              fontSize: "1.2rem",
            }}
          >
            {`${first_name} ${last_name}`}
          </Typography>
        </Box>

        <Divider sx={{borderColor: '#0B192C'}}/>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              width: 150,
              fontSize: "1.2rem",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#FFFF",
            }}
          >
            Age & Gender
          </Typography>
          {age && gender && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                paddingY: 2,
                fontFamily: "cursive",
                color: "#FFA851",
                fontSize: "1.2rem",
              }}
            >
              {age}, {gender}
            </Typography>
          )}
        </Box>
          <Divider sx={{borderColor: '#0B192C'}}/>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              width: 150,
              fontSize: "1.2rem",
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "cursive",
              color: "#FFFF",
            }}
          >
            About
          </Typography>
          {about && (
            <Typography
              variant="subtitle1"
              sx={{ paddingY: 2, fontFamily: "cursive", color: "#FFA851",fontSize: "1.2rem", }}
            >
              {about}
            </Typography>
          )}
        </Box>

          <Divider sx={{borderColor: '#0B192C'}}/>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
            fontFamily: "cursive",
          }}
        >
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              width: 150,
              fontSize: "1.2rem",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#FFFF",
            }}
          >
            Skills{" "}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "cursive",
              color: "#FFA851",             
              fontSize: "1.2rem",
            }}
          >
            {skills && skills.length > 0 ? skills.join(", ") : "No skills"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
