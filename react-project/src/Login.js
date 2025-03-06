import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log("Login response:", response.data);

      if (response.data.message === "Login successful") {
        if (!response.data.username) {
          console.error("Username not found in login response");
          alert("Login failed: Username not provided by server");
          return;
        }

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/goToGame");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back! 🏏</h2>
        <form>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="login-button" onClick={handleLogin}>
            Sign In
          </button>
          <p className="register-prompt">
            New here?{" "}
            <span
              onClick={() => navigate("/register")}
              className="register-link"
            >
              Create Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
