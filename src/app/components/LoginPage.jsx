import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/CredsSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../apis/userApi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { setUser } from "../slices/accountSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data) => {
    try {
      const loginUser = await login(data).unwrap();
      dispatch(setUser(loginUser));
      toast("login succeeded!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast("Login failed: " + error.response.data.message);
      } else {
        toast("Something went wrong: " + error.message);
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Paper
      elevation={9}
      sx={{ bgcolor: "#FFF7F7", mt: 0, borderRadius: 3, width: 500, pb: 5 }}
    >
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#FF6500" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography
          component="h1"
          variant="h5"
          sx={{ color: "#1E3E62", fontWeight: "bold" }}
        >
          Login to your account
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, paddingX: 4 }}
        >
          <TextField
            data-testid="test-email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ mt: 0 }}
            {...register("emailId")}
            error={!!errors.emailId}
            helperText={errors.emailId?.message}
          />

          <TextField
            data-testid="test-password"
            fullWidth
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
          data-testid="test-submit"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, marginY: 2, fontWeight: "bold", bgcolor: "#0B192C" }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "#444444", fontWeight: "bold" }}
          >
            Not a member?{" "}
            <Typography
              component={Link}
              to="/register"
              underline="hover"
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "#1E3E62",
              }}
            >
              Sign Up
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
