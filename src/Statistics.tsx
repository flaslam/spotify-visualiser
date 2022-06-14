import React, { useEffect, useState } from "react";
import fetchData from "./apiCalls";
import "./Statistics.css";

interface StatisticsProps {
  token: string;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  // URLS
  // Get top tracks:
  // https://api.spotify.com/v1/me/top/tracks
  // Get top artists:
  // https://api.spotify.com/v1/me/top/artists
  // Get top genres:
  // https://api.spotify.com/v1/me/top/genres

  const [tracks, setTracks] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   const url = "https://api.spotify.com/v1/me/top/tracks";
    //   const headers = {
    //     Authorization: `Bearer ${props.token}`,
    //   };
    //   const response = await axios.get(url, { headers });

    //   setStats(response.data.items);
    // };

    // fetchData();

    const retrieveStats = async (url: string) => {
      const response = await fetchData(url, props.token);
      const data = response.data.items;
      return data;
      // setStats(data);
    };

    const retrieveAllStats = async () => {
      const tracksUrl = "https://api.spotify.com/v1/me/top/tracks";
      const artistsUrl = "https://api.spotify.com/v1/me/top/artists";
      // const genresUrl = "https://api.spotify.com/v1/me/top/genres";

      const tracks = await retrieveStats(tracksUrl);
      const artists = await retrieveStats(artistsUrl);
      // const genres = await retrieveStats(genresUrl);

      setTracks(tracks);
      setArtists(artists);

      // const data =
      // console.log()
    };

    retrieveAllStats();
  }, [props.token]);

  // TODO: create object with { artists: {retrieveStats(artistUrl)}, tracks: {retriveStats(tracksUrl)}}

  return (
    <div className="statistics">
      <>
        <div className="mainStats">
          <div>
            <h1>Your top songs</h1>
            {tracks.map((track, index) => {
              return (
                <div key={index}>
                  {index + 1}. {track.name} by {track.artists[0].name}
                </div>
              );
            })}
          </div>
          <div>
            <h1>Your top artists</h1>
            {artists.map((item, index) => {
              return (
                <div key={index}>
                  {index + 1}. {item.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="imagesContainer">
          {artists.map((item, index) => {
            return (
              <div key={index} className="imageContainer">
                <img src={item.images[0].url} alt={item.name} />
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Statistics;
