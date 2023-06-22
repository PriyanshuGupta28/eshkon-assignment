import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loginUser } from "../Action/actions";
import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    // Extract user information from the Google login response
    const user = {
      name: response.profileObj.name,
      avatar: response.profileObj.imageUrl,
      city: "Example City",
      country: "Example Country",
    };

    dispatch(loginUser(user)); // Dispatches the action to log in the user with the extracted user data
    navigate("/second-page", { replace: true }); // Navigates to the second page while replacing the current page in the history
  };

  const responseGoogleFailure = (response) => {
    console.log("Login failed:", response);
    if (response.error === "popup_closed_by_user") {
      console.log("User closed the login popup");
      // Provide feedback to the user that the login process was canceled
    } else {
      // Handle other error cases
    }
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="login-content"
      >
        <h1 className="login-heading">Please Login To Continue</h1>
        <GoogleLogin
          clientId="832489980032-eodbe0jbulic1aa2r4tmpcbepr4nldvp.apps.googleusercontent.com" // Google API client ID
          buttonText="Login with Google"
          onSuccess={responseGoogle} // Callback function triggered on successful login
          onFailure={responseGoogleFailure} // Callback function triggered on login failure
          cookiePolicy={"single_host_origin"} // Cookie policy for the login process
        />
      </motion.div>
    </div>
  );
};

export default LoginPage;
