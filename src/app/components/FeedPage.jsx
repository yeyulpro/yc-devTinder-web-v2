import UserCardPage from "./UserCardPage";
import { useGetAllFeedQuery } from "../apis/matchingApi";
import NoUserPage from "./NoUserPage";
import Typography from "@mui/material/Typography";
import { useInterestIgnoreRequestsMutation } from "../apis/matchingApi";
import Box from "@mui/material/Box";
export default function FeedPage() {
  const { data, error, isLoading } = useGetAllFeedQuery();
  const [interestIgnoreRequests] = useInterestIgnoreRequestsMutation();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data...</Typography>;
  }

  
  const interestHandler = async (id) => {
    await interestIgnoreRequests({ state: "interested", id }).unwrap();
  };
  const ignoreHandler = async (id) => {
    await interestIgnoreRequests({ state: "ignored", id }).unwrap();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        mt: 0,
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ color: "#FF6500", textTransform: "uppercase" }}
        >
          Interest Request
        </Typography>
      </Box>
      {data?.feedList[0] ? (
        <UserCardPage
          key={data.feedList[0]._id}
          user={data.feedList[0]}
          interestHandler={() => interestHandler(data.feedList[0]._id)}
          ignoreHandler={() => ignoreHandler(data.feedList[0]._id)}
        />
      ):(<NoUserPage/>)}
    </Box>
  );
}
