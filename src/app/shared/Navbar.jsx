import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../apis/userApi";
import { toast } from "react-toastify";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../slices/accountSlice";
const pages = ["Security", "Guidlines", "Contact"];

const settings = [
    { name: "Feed", linkTo: "/feed", backColor: "#FFAEBC", theColor: "#2E2E2E" },
    {
        name: "Received Interests",
        linkTo: "/connect-request",
        backColor: "#A0E7E5",
        theColor: "#2E2E2E",
    },
    {
        name: "Connections",
        linkTo: "/connections",
        backColor: "#B4F8C8",
        theColor: "#2E2E2E",
    },
    {
        name: "Edit My Profile",
        linkTo: "/edit",
        backColor: "#FBE7C6",
        theColor: "#2E2E2E",
    },
];

export default function Navbar() {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginUser = useSelector((state) => state.account.user);
    const isLoggedIn = useSelector((state) => state.account.isLogginedIn); // after login=> isLoggedIn set to be true

    const logoutHandler = async () => {
        try {
            await logout();
            dispatch(clearUser());
            toast("logout success!");
            navigate("/feed");
        } catch (error) {
            console.log(error.message);
        }
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "#ff4d6d" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <FavoriteBorderSharpIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to={"/main"}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontWeight: "bold",
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            fontFamily: "cursive",
                            fontSize: "2rem",
                        }}
                    >
                        YC-Tinder
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        component={Link}
                        to={"/"}
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        YC-Tinder
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        {!isLoggedIn ? (
                            <>
                                <Button
                                    component={Link}
                                    to="/register"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.95)",
                                        fontSize: "1.2rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Register
                                </Button>
                                <Button
                                    component={Link}
                                    to="/login"
                                    sx={{
                                        color: "#fafafa",
                                        fontSize: "1.2rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Login
                                </Button>
                            </>
                        ) : (
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton
                                        onClick={handleOpenUserMenu}
                                        sx={{ p: 0, fontSize: "1.2rem" }}
                                    >
                                        <Typography sx={{ color: "#FFFF", mr: 2 }}>
                                            Hello,
                                            <FavoriteBorderIcon /> {loginUser.first_name}{" "}
                                            {loginUser.last_name}
                                        </Typography>
                                        <Avatar alt="Remy Sharp" src={loginUser.photoUrl} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting.name}
                                            onClick={handleCloseUserMenu}
                                            sx={{
                                                bgcolor: setting.backColor,
                                                color: setting.theColor,
                                                fontWeight: "bold",
                                                "&:hover": { bgcolor: "#FFD800" },
                                            }}
                                            component={Link}
                                            to={setting.linkTo}
                                        >
                                            {setting.name}
                                        </MenuItem>
                                    ))}
                                </Menu>
                                <Button onClick={logoutHandler} sx={{ color: "#FFFF" }}>
                                    Logout
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
