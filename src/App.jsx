console.log("App.jsx JS 실행됨");
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./app/shared/Navbar";
import Footer from "./app/shared/Footer";
import Container from "@mui/material/Container";
import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";


export default function App() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        {isHome ? (
          <Outlet />
        ) : (
          <Container
            maxWidth="xl"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 10,
            }}
          >
            <Outlet />
          </Container>
        )}

        <Footer />
      </Box>
    </React.Fragment>
  );
}
