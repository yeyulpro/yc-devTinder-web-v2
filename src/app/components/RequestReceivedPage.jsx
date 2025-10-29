import {
  useAcceptOrRejectRequestsMutation,
  useConnectionRequestQuery,
} from "../apis/matchingApi";
import Container from "@mui/material/Container";
import RequestReceivedCardPage from "./RequestReceivedCardPage";
import Nobody from "../shared/Nobody"

export default function RequestReceivedPage() {
  const { data } = useConnectionRequestQuery();
  const requestors = data?.receivedRequests ?? [];

  const [acceptOrRejectRequests] = useAcceptOrRejectRequestsMutation();

  const acceptHandler = async (id) => {
    await acceptOrRejectRequests({ state: "accepted", id }).unwrap();
  };
  const rejectHandler = async (id) => {
    await acceptOrRejectRequests({ state: "rejected", id }).unwrap();
  };

  return (
    <>
      {!requestors || requestors.length == 0 ? (
        <Nobody />
      ) : (
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
          {requestors.map((user) => (
            <RequestReceivedCardPage
              key={user?._id}
              user={user?.fromUserId} //info of user who is interested in me
              acceptHandler={() => {
                acceptHandler(user?._id);
              }}
              rejectHandler={() => {
                rejectHandler(user?._id);
              }}
            />
          ))}
        </Container>
      )}
    </>
  );
}
