import React from "react";
import Button from "@mui/material/Button";
import "./Login.css";

const Login: React.FC = () => {
  // Preparing the URL for authentication
  var client_id = "48a8525bea9f4603beb857f4cc7d1adb";
  var redirect_uri = "http://localhost:3000/";

  var scope = "user-top-read";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  return (
    <div className="loginContainer">
      <div>
        <Button variant="contained" color="success" href={url}>
          Login to Spotify
        </Button>
      </div>
      <div>
        <p>You will be redirected to Spotify to login.</p>
        <p>None of your personal data is saved on this site.</p>
      </div>
    </div>
  );
};

export default Login;
