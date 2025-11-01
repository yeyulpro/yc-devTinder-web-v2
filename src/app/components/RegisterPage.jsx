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
import { registerSchema } from "../utils/CredsSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../apis/userApi";
import { useState } from "react";
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

  return (
    <Paper
      elevation={9}
      sx={{ bgcolor: "#FFF7F7", mt: 0, borderRadius: 3, width: 550, pb: 5 }}
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
          sx={{
            color: "#1E3E62",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3, paddingX: 4 }}>
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
            error={!!errors.first_name}
            helperText={errors.first_name?.message}
          />

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
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
          />

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
            error={!!errors.emailId}
            helperText={errors.emailId?.message}
          />


          <TextField
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, marginY: 2, fontWeight: "bold", bgcolor: '#0B192C' }}
          >
            Sign Up
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "#444444", fontWeight: "bold" }}
          >
            Are you a member?{" "}
            <Typography
              component={Link}
              to='/login'
              underline="hover"

              sx={{ color: '#1E3E62', fontWeight: "bold", textDecoration: 'none' }}
            >
              Log In
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
