import React, { useEffect, useState } from "react";
import fetchData from "./apiCalls";
import "./Statistics.css";
import Visualiser from "./Visualiser";
import Visualiser2D from "./Visualiser2D";

interface StatisticsProps {
  token: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  const [view, setView] = useState<Boolean>(true);
  const [tracks, setTracks] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  useEffect(() => {
    const retrieveStats = async (url: string) => {
      const response = await fetchData(url, props.token);
      const data = response.data.items;
      return data;
      // setStats(data);
    };

    const retrieveAllStats = async () => {
      // TODO: get user genres
      const tracksUrl = "https://api.spotify.com/v1/me/top/tracks";
      const artistsUrl = "https://api.spotify.com/v1/me/top/artists";

      const tracks = await retrieveStats(tracksUrl);
      const artists = await retrieveStats(artistsUrl);

      setTracks(tracks);
      setArtists(artists);
    };

    retrieveAllStats();
  }, [props.token]);

  return (
    <>
      {view ? (
        <Visualiser artists={artists} />
      ) : (
        <Visualiser2D artists={artists} tracks={tracks} />
      )}
    </>
  );
};

export default Statistics;
