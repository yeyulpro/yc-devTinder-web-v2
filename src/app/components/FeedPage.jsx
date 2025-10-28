import UserCardPage from "./UserCardPage";
import { useGetAllFeedQuery } from "../apis/matchingApi";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useInterestIgnoreRequestsMutation } from "../apis/matchingApi";

export default function FeedPage() {
  const { data, error, isLoading } = useGetAllFeedQuery();
  const [interestIgnoreRequests] = useInterestIgnoreRequestsMutation();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading data...</Typography>;
  }

  if (!data?.feedList || data?.feedList.length === 0) {
    return <Typography>No user data...</Typography>;
  }
  const interestHandler = async (id) => {
    await interestIgnoreRequests({ state: "interested", id }).unwrap();
  };
  const ignoreHandler = async (id) => {
    await interestIgnoreRequests({ state: "ignored", id }).unwrap();
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-around",
        p: 4,
      }}
    >
      {data?.feedList?.map((user) => (
        <UserCardPage
          key={user?._id}
          user={user}
          interestHandler={() => interestHandler(user._id)}
          ignoreHandler={() => ignoreHandler(user._id)}
        />
      ))}
    </Container>
  );
}
