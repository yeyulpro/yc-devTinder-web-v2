import { useConnectionsQuery } from "../apis/matchingApi";
import Nobody from "../shared/Nobody"
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ConnectionsCardPage from "./ConnectionsCardPage";

export default function ConnectionsPage() {
  const { data: connectedUsers, isLoading, isError } = useConnectionsQuery();

  if (isLoading) return <Typography>Loading ...</Typography>;

  if (isError) return <Typography> Error ...</Typography>;

  if (!connectedUsers || connectedUsers.length === 0) {
    return <Nobody />;
  }
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
      {connectedUsers?.map((user) => (
        <ConnectionsCardPage key={user._id} user={user} />
      ))}
    </Container>
  );
}
