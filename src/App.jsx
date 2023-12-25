import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SevenDays from "./components/SevenDays";
import Search from "./components/main/Search";
import getFormattedWeatherData from "./WeatherData/Data";

function App() {
  const [query, setQuery] = useState({ q: "Kathmandu" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-lg h-[600px] mt-10 py-5 bg-light-grey shadow-xl shadow-black-400 rounded-xl flex ">
      {weather && (
        <>
          <NavBar />
          <Search
            weather={weather}
            setQuery={setQuery}
            units={units}
            setUnits={setUnits}
          />
          <SevenDays weather={weather} />
        </>
      )}
    </div>
  );
}

export default App;
