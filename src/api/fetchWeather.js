import axios from "axios";

const URL='https://api.openweathermap.org/data/2.5/weather'

const API_KEY = "71f8f6c834d4dd3162323123640fb85c";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
