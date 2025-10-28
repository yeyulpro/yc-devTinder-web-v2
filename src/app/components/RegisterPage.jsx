import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../utils/CredsSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../apis/userApi";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function RegisterPage() {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data) => {
    try {
      await signUp(data).unwrap();
      toast("register succeeded!");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        toast("register failed: " + error.response.data.message);
      } else {
        toast("Something went wrong: " + error.message);
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper
      elevation={9}
      sx={{ bgcolor: "#f4acb7", mt: 0, borderRadius: 3, width: 550, pb: 5 }}
    >
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography
          component="h1"
          variant="h5"
          sx={{ color: "#444444", fontWeight: "bold" }}
        >
          Login to your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
            sx={{ mt: 0 }}
            {...register("first_name")}
          />
          <Typography sx={{ color: "#ff0000" }}>
            {errors.first_name?.message}
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            autoFocus
            sx={{ mt: 0 }}
            {...register("last_name")}
          />
          <Typography sx={{ color: "#ff0000" }}>
            {errors.last_name?.message}
          </Typography>
          <TextField
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
          />
          <Typography sx={{ color: "#ff0000" }}>
            {errors.emailId?.message}
          </Typography>

          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            {...register("password")}
            value="Passw0rd!"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, marginY: 2, fontWeight: "bold" }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "#444444", fontWeight: "bold" }}
          >
            Are you a member?{" "}
            <Link
              href="/login"
              variant="body2"
              underline="hover"
              sx={{ borderColor: "#ff6b81", fontWeight: "bold" }}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
