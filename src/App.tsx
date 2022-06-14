import React, { useEffect, useState } from "react";
import "./App.css";
import Statistics from "./Statistics";
import Login from "./Login";

const App: React.FC = () => {
  // Preparing the URL for authentication
  var client_id = "48a8525bea9f4603beb857f4cc7d1adb";
  var redirect_uri = "http://localhost:3000/";

  // var state = generateRandomString(16);

  // localStorage.setItem(stateKey, state);
  var scope = "user-top-read";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  // url += '&state=' + encodeURIComponent(state);

  // Preparing

  const [token, setToken] = useState<String>("");

  const clearCookies = () => {
    console.log(localStorage.getItem("userInfo"));
  };

  useEffect(() => {
    const getHash = () => {
      // Get the hash from the URL
      // Format: #access_token=XYZ&token_type=Bearer&expires_in=3600

      // Get browser hash URL
      const hash = window.location.hash;

      if (!hash) {
        console.log("No hash.");
        return;
      }

      // console.log(decodeURIComponent(hash.substring(1).split("&")[0]));

      const access_token = hash.substring(
        hash.indexOf("=") + 1,
        hash.indexOf("&")
      );

      if (!access_token) {
        console.log("No token.");
        return;
      }

      setToken(access_token);
    };

    getHash();

    // searchParams.get("access_token");
  });

  return (
    <div className="App">
      <>
        {!token ? (
          <div>
            <a href={url}>login</a>
          </div>
        ) : (
          <>
            <Statistics token={token} />
            <button onClick={clearCookies} />
          </>
        )}
      </>
    </div>
  );
};

export default App;
