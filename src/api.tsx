import { useEffect, useState } from "react";
interface Weather {
  wind_spd: number;
  clouds: number;
  weather: {
    description: string;
  };
}

function App() {
  const apiKey = "43f0bebeb2b446adb81dfce1fd289e32";
  const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${apiKey}&include=minutely`;
  const [windSpeed, setWindSpeed] = useState<number | null>(null);
  const [clouds, setClouds] = useState<number | null>(null);
  const [weatherDescription, setWeatherDescription] = useState<string>("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        const weatherData: Weather = data["data"][0];
        setWindSpeed(weatherData.wind_spd);
        setClouds(weatherData.clouds);
        setWeatherDescription(weatherData["weather"]["description"]);
      });
  });

  return (
    <>
      <h1>Wind Speed: {windSpeed ?? "Loading..."}</h1>
      <p>Cloud Coverage: {clouds ?? "Loading..."}</p>
      <p>Weather: {weatherDescription || "Loading..."}</p>
    </>
  );
}

export default App;
