import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Groups3Icon from "@mui/icons-material/Groups3";
import ChatIcon from "@mui/icons-material/Chat";
import CameraFrontIcon from "@mui/icons-material/CameraFront";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function PaymentChoice() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{ width: 1100 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
        >
            <Card
                sx={{
                    bgcolor: "#B3541E",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    flexGrow: 1,
                    p: 2,
                }}
            >
                <Typography
                    sx={{
                        pt: 0,
                        pb: 1,
                        color: "#E0E0E0",
                        textShadow: `
             0 0 1px #000,     
            0 0 3px #999,      
            0 0 5px #C0C0C0,   
            0 0 10px #E0E0E0   
          `,
                        fontWeight: "bolder",
                    }}
                    variant="h5"
                >
                    Silver Membership
                </Typography>
                <List sx={{ py: 0 }}>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <ChatIcon />
                        <ListItemText primary="Chat with other people" />
                    </ListItem>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <Groups3Icon />
                        <ListItemText primary="100 connection requests per day" />
                    </ListItem>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <CameraFrontIcon />
                        <ListItemText primary="Blue Ticket" />
                    </ListItem>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <CalendarMonthIcon />
                        <ListItemText primary="3 Months" />
                    </ListItem>
                </List>
                <Button
                    onClick={() => navigate("/details")}
                    variant="contained"
                    sx={{
                        mt: 2,
                        color: "#C0C0C0",
                        bgcolor: "#00224D",
                        textShadow: `
            0 0 5px #C0C0C0,
            0 0 10px #C0C0C0,
            0 0 20px #C0C0C0,
            0 0 40px #C0C0C0,
            0 0 80px #C0C0C0
          `,
                    }}
                >
                    Buy Sliver
                </Button>
            </Card>

            <Divider orientation="vertical" flexItem sx={{ mx: 2, color: "#FFFF" }}>
                OR
            </Divider>

            <Card
                sx={{
                    bgcolor: "#B85C38",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    flexGrow: 1,
                    p: 2,
                }}
            >
                <Typography
                    sx={{
                        pt: 0,
                        pb: 1,
                        color: "#FFFF99",
                        textShadow: `
              0 0 1px #000,        
            0 0 3px #B8860B,     
            0 0 5px #FFD700,     
            0 0 10px #FFE066      
          `,
                        fontWeight: "bolder",
                    }}
                    variant="h5"
                >
                    Gold Membership
                </Typography>
                <List sx={{ py: 0 }}>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <ChatIcon />
                        <ListItemText primary="Chat with other people" />
                    </ListItem>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <Groups3Icon />
                        <ListItemText primary="Infinite connection requests per day" />
                    </ListItem>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <CameraFrontIcon />
                        <ListItemText primary="Blue Ticket" />
                    </ListItem>
                    <ListItem sx={{ py: 0, gap: 1 }}>
                        <CalendarMonthIcon />
                        <ListItemText primary="6 Months" />
                    </ListItem>
                </List>
                <Button
                    onClick={() => navigate("/details")}
                    variant="contained"
                    sx={{
                        mt: 2,
                        color: "#FFD700",
                        bgcolor: "#00224D",
                        textShadow: `
                                0 0 5px #FFD700,
                                0 0 10px #FFD700,
                                0 0 20px #FFD700,
                                0 0 40px #FFD700,
                                0 0 80px #FFD700
                            `,
                    }}
                >
                    Buy Gold
                </Button>
            </Card>
        </Box>
    );
}
