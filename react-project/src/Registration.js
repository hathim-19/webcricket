import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";
import "./registration.css";

const Registration = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // Define the Joi schema for validation
  const schema = {
    userName: Joi.string().min(3).max(30).required().label("User Name"),
    nickName: Joi.string().min(3).max(30).required().label("Nick Name"),
    email: Joi.string()
      .email({ tlds: { allow: ["com", "in"] } })
      .required()
      .label("Email"),
    phoneNumber: Joi.string()
      .regex(/^[0-9]{10}$/)
      .required()
      .label("Phone Number"),
    password: Joi.string().min(6).required().label("Password"),
  };

  // Validate the form data using Joi
  const validate = () => {
    const data = { userName, nickName, email, phoneNumber, password };
    const result = Joi.validate(data, schema);
    if (!result.error) return null;

    const errorData = {};
    result.error.details.forEach((item) => {
      errorData[item.path[0]] = item.message;
    });
    return errorData;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      return; // Stop navigation if there are validation errors
    }
    setErrors({});

    const data = { userName, nickName, email, phoneNumber, password };

    try {
      // Post the form data to the server
      await axios.post("http://localhost:5000/api/users/register", data);
      //If the registration is successful, navigate to /goToGame
      navigate("/goToGame");
    } catch (err) {
      console.error("Registration failed", err);
    }
    setServerError("Registration failed. Please try again later.");
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register Now</h2>
        {serverError && <p className="error">{serverError}</p>}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && <p className="error">{errors.userName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="nickName">Nick Name</label>
            <input
              type="text"
              id="nickName"
              name="nickName"
              placeholder="Enter your nickname"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
            {errors.nickName && <p className="error">{errors.nickName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="register-button">
            Enter Battle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
