import axios from "axios";
import React, { useState } from "react";
import "../login.css"; // Import custom CSS for styling
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State variables to hold the values of username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State variable to hold error messages
  const [errorMessage, setErrorMessage] = useState("");

 const navigate= useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if username or password is empty
    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    // Create payload object
    const payload = {
      username: username,
      password: password,
    };

    // Make POST request to the login endpoint
    axios
      .post('https://fakestoreapi.com/auth/login', payload)
      .then((response) => {
        // Successful login
        const token = response.data.token;
        // Store token in localStorage for future use
        localStorage.setItem("MyToken", token);
        // Clear any previous error message
        setErrorMessage("");
        navigate('/')
      })
      .catch((error) => {
        // Error occurred
        if (error.response) {
          // Server responded with an error status code
          setErrorMessage(error.response.data.message || "An error occurred.");
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage("No response received from the server.");
        } else {
          // Other errors
          setErrorMessage("An error occurred while processing the request.");
        }
      });
  };

  return (
    <>
      <div className="card my-login-card">
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            {/* Display error message if exists */}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
