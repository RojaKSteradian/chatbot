import React from "react";
import { styled } from "@mui/system";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  MenuItem,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const SectionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export default function SignUpSide() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const[countryCode, setcountryCode]=React.useState("+91")
  const [showPassword, setShowPassword] = React.useState(false);
  const [message, setMessage] = React.useState(
    "Please fill in the details to sign up"
  );
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePhoneChange = (e) => {
    const regex = /^[+0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  const submitSignup = () => {
    const reqURL = "http://api.innotrat.com:5000/signup";
    fetch(reqURL, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mobile_number:countryCode + phone,
        password: password,
      }),
    })
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (data.success === true) {
              setMessage(data.message);
              // window.location.href = "/login";
              localStorage.setItem('mobile_number',phone)
              navigate('/verify-otp')
            } else {
              setMessage(data.message);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SectionContainer>
      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/images/login/signup.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon
                sx={{
                  color: "white",
                }}
              />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                select
                required
                fullWidth
                name="countryCode"
                label="Country Code"
                value={countryCode}
                onChange={(e) => setcountryCode(e.target.value)}
                >
                <MenuItem value="+91">+91 (India)</MenuItem>
                <MenuItem value="+1">+1 (USA)</MenuItem>
                {/* Add more country codes as needed */}
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                name="phone number"
                label="Phone Number"
                id="phone number"
                type="text"
                value={phone}
                onChange={(e) => {
                  handlePhoneChange(e);
                }}
              />
              <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="password">Password *</InputLabel>
                <OutlinedInput
                  id="password"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Typography
                variant="body2"
                textAlign="center"
                mt={2}
                sx={{ color: "#757575",fontSize: "1.2rem", }}
                
              >
                {message}
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,fontSize: "1.2rem", }}
                onClick={submitSignup}
              >
                Sign Up
              </Button>

              <Link
                href="/login"
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem", 
                }}
              >
                {"Already have an account? Login"}
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
