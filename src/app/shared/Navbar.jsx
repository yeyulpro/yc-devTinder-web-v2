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
import { clearUser, setUser } from "../slices/accountSlice";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import { useProfileQuery } from "../apis/userApi";
import { useEffect } from "react";
import PaymentIcon from "@mui/icons-material/Payment";

const pages = [
    { name: "Security", linkTo: "/security" },
    { name: "Guidlines", linkTo: "/guidelines" },
];

const settings = [
    {
        name: "Feeds",
        linkTo: "/feeds",
        backColor: "#3d405b",
        theColor: "#ff9e00",
        icon: <Groups2SharpIcon />,
    },
    {
        name: "Requests",
        linkTo: "/connect-request",
        backColor: "#e0e1dd",
        theColor: "#3d405b",
        icon: <ThumbUpSharpIcon />,
    },
    {
        name: "Connections",
        linkTo: "/connections",
        backColor: "#3d405b",
        theColor: "#ff9e00",
        icon: <FavoriteSharpIcon />,
    },
    {
        name: "Edit My Profile",
        linkTo: "/profile-edit",
        backColor: "#e0e1dd",
        theColor: "#3d405b",
        icon: <EditNoteSharpIcon />,
    },
    {
        name: "Payment",
        linkTo: "/pay-choice",
        backColor: "#3d405b",
        theColor: "#ff9e00",
        icon: <PaymentIcon />,
    },
];

export default function Navbar() {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: profileData, error } = useProfileQuery();

    useEffect(() => {
        if (!profileData) return;
        if (profileData) {
            dispatch(setUser(profileData));
        } else if (error) {
            dispatch(logout());
        }
    }, [profileData, error, dispatch, logout]);

    const loginUser = useSelector((state) => state.account?.user);
    const isLoggedIn = useSelector((state) => state.account?.isLoggedIn);

    const logoutHandler = async () => {
        try {
            await logout();
            dispatch(clearUser());
            toast("logout success!");
            navigate("/");
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
        <AppBar position="static" sx={{ bgcolor: "#456882" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 100 }}>
                    <FavoriteBorderSharpIcon
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                                fontSize: "2.5rem",
                                color: "#e63946",
                            },
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to={"/"}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontWeight: "bold",
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            fontFamily: "cursive",
                            fontSize: "2.5rem",
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
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={page.linkTo}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {page.name}
                                    </Typography>
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
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                component={Link}
                                to={page.linkTo}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {/* ================= */}
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
                                data-testid="navbar-register"
                                    onClick={()=>navigate('/register')}
                                    sx={{
                                        color: "#FFFF",
                                        fontSize: "1.2rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Register
                                </Button>
                                <Button
                                 data-testid="navbar-login"
                                    onClick={()=>navigate('/login')}
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
                                        <Typography
                                         data-testid="navbar-hello"
                                            sx={{
                                                color: "#FFFF",
                                                mr: 2,
                                                fontSize: "1.2rem",
                                                fontFamily: "cursive",
                                                fontWeight: "bold",
                                            }}
                                        >
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
                                                "&:hover": { bgcolor: "#fff0f3" },
                                            }}
                                            component={Link}
                                            to={setting.linkTo}
                                        >
                                            <Box sx={{ display: "flex", gap: 2 }}>
                                                {setting.icon}
                                                {setting.name}
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </Menu>
                                <Button
                                    onClick={logoutHandler}
                                    sx={{ color: "#FFFF", fontSize: "1.2rem" }}
                                >
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
