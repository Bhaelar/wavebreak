import axios from "axios";

export const fetchData = async () => {
  const url = `https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15`;
  const result = await axios.get(url);
  return result;
};
