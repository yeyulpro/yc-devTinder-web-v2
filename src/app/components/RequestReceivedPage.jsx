import {
  useAcceptOrRejectRequestsMutation,
  useConnectionRequestQuery,
} from "../apis/matchingApi";
import RequestReceivedCardPage from "./RequestReceivedCardPage";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NoUserPage from "./NoUserPage";

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
          Connection Request
        </Typography>
      </Box>

      {requestors[0] ? (
        <RequestReceivedCardPage
          key={requestors[0]._id}
          user={requestors[0].fromUserId}
          acceptHandler={() => 
            acceptHandler(requestors[0]._id)
          }
          rejectHandler={() => 
            rejectHandler(requestors[0]._id)
          }
        />
      ):(<NoUserPage/>)}
    </Box>
  );
}
