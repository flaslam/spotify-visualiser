import React from "react";
import Button from "@mui/material/Button";
import "./Login.css";

const Login: React.FC = () => {
  // Preparing the URL for authentication
  const client_id = "48a8525bea9f4603beb857f4cc7d1adb";
  const redirect_uri: string = process.env.REACT_APP_REDIRECT_URI as string;
  const scope = "user-top-read";
  let url = "https://accounts.spotify.com/authorize";
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
