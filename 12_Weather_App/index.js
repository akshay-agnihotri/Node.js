// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY = "62010d117319a1d08d7af4ddbc81b656";

// As i run node index.js the prompt is shown as follows:
// Welcome to the Weather App
// Enter the city name:

import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Something Went wrong! ${err.message}`);
  }
};

const prompt = await rl.question("Enter the city name: ");
const weatherData = await getWeatherData(prompt);
if (weatherData) {
  console.log(`Weather in ${weatherData.name}:`);
  console.log(`Temperature: ${weatherData.main.temp}K`);
  console.log(`Humidity: ${weatherData.main.humidity}%`);
  console.log(`Weather: ${weatherData.weather[0].description}`);
  console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
}

rl.close();
