import axios from "axios";
import React, { useEffect, useState } from "react";
// import testFunction from "./apiCalls";

interface StatisticsProps {
  token: String;
}

const Statistics: React.FC<StatisticsProps> = (props) => {
  // const endpoints = ["recentl"]

  // https://api.spotify.com/v1/me/top/tracks get top tracks
  //

  const [stats, setStats] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.spotify.com/v1/me/top/tracks";
      const headers = {
        Authorization: `Bearer ${props.token}`,
      };
      const response = await axios.get(url, { headers });

      setStats(response.data.items);
    };

    fetchData();
  }, [props.token]);

  return (
    <div>
      <>
        <p>{props.token}</p>
        {console.log(stats)}
        {stats.map((item) => {
          return <>{item.name}</>;
        })}
        ;
      </>
    </div>
  );
};

export default Statistics;
