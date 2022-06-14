import axios from "axios";

const fetchData = async (url: string, token: string) => {
  const headers = {
    Authorization: "Bearer " + token,
  };
  return await axios.get(url, { headers });
};

export default fetchData;
