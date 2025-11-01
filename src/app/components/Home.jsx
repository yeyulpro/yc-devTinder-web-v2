import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100vw",
                backgroundImage: 'url("/images/back.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", gap: 6, justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 0 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: 250,
                                height: 300,
                                border: "3px solid #1A2A4F",
                                borderRadius: 3,
                                overflow: "hidden",
                                transform: "rotate(-10deg)",
                                transition: "transform 0.3s ease",
                                boxShadow: 3,
                                "&:hover": {
                                    transform: "rotate(0deg) scale(1.03)",
                                },
                            }}
                        >
                            
                            <Box
                                component="img"
                                src={"/images/parkbogum.jpg"}
                                alt="Profile"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />

                           
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 16,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    gap: 2,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{
                                        backgroundColor: "#d32f2f",
                                        "&:hover": { backgroundColor: "#b71c1c" },
                                    }}
                                >
                                    Rejected
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#1976d2",
                                        "&:hover": { backgroundColor: "#0d47a1" },
                                    }}
                                >
                                    Accepted{" "}
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Typography variant="h2"  sx={{pb:0, color:'#2D3250', fontWeight:'bolder'}}>
                                Match, Chat Meet and                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    fontSize: "4rem",
                                    pt: 0,
                                    color: "#FF073A",
                                    fontWeight: "bolder",
                                    alignItems: "center",
                                 
                                    fontFamily:'cursive',
                                    transform: "rotate(-20deg)",
                                      "&:hover": {
                                    transform: "rotate(10deg) scale(1.03)",
                                },
                                }}
                            >
                                Tinder
                            </Box>
                        </Box>

                        <Typography variant="body1" color="initial">
                            Go beyond your social circle, and connect with people near and
                            far. You’re about to have the best online dating experience – all
                            you need are some good pics and a solid bio to stand out.
                        </Typography>

                        <Button variant="contained" sx={{ bgcolor:'#e36414',fontSize: "1.7rem", width:200 ,alignSelf:'center', borderRadius:9 }} onClick={()=>navigate('/register')}>Join Now</Button>
                    </Box>
                    <Box sx={{ mt: 19 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: 300,
                                height: 500,
                                border: "3px solid #1A2A4F",
                                borderRadius: 3,
                                overflow: "hidden",
                                transform: "rotate(5deg)",
                                transition: "transform 0.3s ease",
                                boxShadow: 3,
                                "&:hover": {
                                    transform: "rotate(0deg) scale(1.03)",
                                },
                            }}
                        >
                           
                            <Box
                                component="img"
                                src={"/images/kimheesun.jpg"}
                                alt="Profile"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />

                          
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 16,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    gap: 2,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{
                                        backgroundColor: "#d32f2f",
                                        "&:hover": { backgroundColor: "#b71c1c" },
                                    }}
                                >
                                    Ignored
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#1976d2",
                                        "&:hover": { backgroundColor: "#0d47a1" },
                                    }}
                                >
                                    Interested
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
