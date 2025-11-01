import { useConnectionsQuery } from "../apis/matchingApi";
import Nobody from "../shared/Nobody"
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ConnectionsCardPage from "./ConnectionsCardPage";
import Box from "@mui/material/Box";
import NoUserPage from "./NoUserPage";


export default function ConnectionsPage() {
  const { data: connectedUsers, isLoading, isError } = useConnectionsQuery();

  if (isLoading) return <Typography>Loading ...</Typography>;

  if (isError) return <Typography> Error ...</Typography>;

  const isMatched = (!connectedUsers || connectedUsers.length === 0) ? false : true;

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: 6,
      mt: 0,
      alignItems: "center",
    }}>
      <Typography variant="h3"
        sx={{ color: "#FF6500", textTransform: "uppercase" }}>Matches</Typography>
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
        {!isMatched && (<NoUserPage />)}
        {connectedUsers?.map((user) => (
          <ConnectionsCardPage key={user._id} user={user} />
        ))}



      </Container>
    </Box>

  );
}
