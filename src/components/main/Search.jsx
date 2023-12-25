import { FiSearch } from "react-icons/fi";
import Temperature from "./Temperature";
import TodaysForecast from "./TodaysForecast";
import AirConditions from "./AirConditions";
import { useState } from "react";

const Search = ({ weather, setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-light-blue ml-5 relative flex flex-col w-120 justify-between rounded-lg">
      <FiSearch
        onClick={handleSearch}
        className="absolute left-2 top-2.5 text-[#02457a] text-xl transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        onKeyUp={handleKeyPress}
        type="text"
        placeholder="Search for city ..."
        className=" text-lg text-[#001b48] w-[600px] bg-whitesmoke rounded-md pl-10 h-10  focus:outline-none"
      />
      <Temperature
        weather={weather}
        setQuery={setQuery}
        units={units}
        setUnits={setUnits}
      />
      <AirConditions weather={weather} units={units} setUnits={setUnits} />
      <TodaysForecast weather={weather} />
    </div>
  );
};

export default Search;
