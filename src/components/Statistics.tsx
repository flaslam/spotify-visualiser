import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../apiCalls";
import Visualiser from "./Visualiser";
import Visualiser2D from "./Visualiser2D";
import "./Statistics.css";

interface StatisticsProps {
  token: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  const [view, setView] = useState<Boolean>(true);
  const [tracks, setTracks] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  // const [playing, setPlaying] = useState<any[]>([]);

  useEffect(() => {
    const retrieveStats = async (url: string) => {
      try {
        const response = await fetchData(url, props.token);
        const data = response.data.items;
        return data;
        // setStats(data);
      } catch (err) {
        console.log(err);
      }
    };

    const retrieveAllStats = async () => {
      // TODO: get user genres
      const tracksUrl = "https://api.spotify.com/v1/me/top/tracks";
      const artistsUrl = "https://api.spotify.com/v1/me/top/artists";
      const playingUrl =
        "https://api.spotify.com/v1/me/player/currently-playing";

      const tracks = await retrieveStats(tracksUrl);
      const artists = await retrieveStats(artistsUrl);
      const playing = await retrieveStats(playingUrl);

      console.log(playing);

      setTracks(tracks);
      setArtists(artists);
    };

    retrieveAllStats();
  }, [props.token]);

  return (
    <>
      <div className="btnHolder">
        <Button
          onClick={() => setView((prevState) => !prevState)}
          className="toggleBtn"
        >
          TOGGLE VIEW
        </Button>
      </div>
      {view ? (
        <Visualiser artists={artists} />
      ) : (
        <Visualiser2D artists={artists} tracks={tracks} />
      )}
    </>
  );
};

export default Statistics;
