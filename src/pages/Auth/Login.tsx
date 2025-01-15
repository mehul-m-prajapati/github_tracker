import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Link,
  CardActions,
  CircularProgress,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/useAppSelector";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/authSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await dispatch(login({ email, password }));
      if (response.meta.requestStatus === "fulfilled") {
        navigate("/home");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setError("");
      setEmail("");
      setPassword("");
    }
  };

  const handleGithubLogin = async () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="w-screen-md text-xl text-center font-bold cursor-pointer mb-6">
          Login with
          <h4 className="text-4xl">GitHub Tracker</h4>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            fullWidth
          >
            {isLoading && (
              <CircularProgress className="mr-3" size={24} color="inherit" />
            )}
            Log In
          </Button>
        </form>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<GitHubIcon />}
            onClick={handleGithubLogin}
          >
            Sign in with GitHub
          </Button>
        </CardActions>
        <Typography align="center" style={{ marginTop: 16 }}>
          Not a member?{" "}
          <Link href="/signup" underline="hover">
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
