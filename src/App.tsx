import React, { useEffect, useState } from "react";
import "./App.css";
import Statistics from "./Statistics";
import Login from "./Login";

const App: React.FC = () => {
  // Authorization token
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const getTokenFromHash = () => {
      // Get the hash from the URL, format: #access_token=XYZ&token_type=Bearer&expires_in=3600

      // Get browser hash URL
      const hash = window.location.hash;

      if (!hash) {
        // console.log("No hash.");
        return;
      }

      // TODO: Better way of decoding string
      // console.log(decodeURIComponent(hash.substring(1).split("&")[0]));

      const access_token = hash.substring(
        hash.indexOf("=") + 1,
        hash.indexOf("&")
      );

      if (!access_token) {
        // console.log("No token.");
        return;
      }

      setToken(access_token);

      // Clear browser hash
      window.location.hash = "";
    };

    getTokenFromHash();
  });

  return (
    <div className="App">
      {!token ? <Login /> : <Statistics token={token} />}
    </div>
  );
};

export default App;
