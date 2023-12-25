import { UilSun, UilSunset } from "@iconscout/react-unicons";
import { formatToLocalTime } from "../../WeatherData/Data";

const Temperature = ({
  weather: { details, temp, dt, timezone, name, country, feels_like }, units, setUnits }) => {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const temperatureUnit = (feels_like, unit) => {
    if (unit === "metric") {
      return `${feels_like}°C`;
    } else if (unit === "imperial") {
      return `${feels_like} °F`;
    }
  };
  const temperatureValue = temperatureUnit(feels_like, units);

  return (
    <div className=" h-40 w-120 rounded-lg flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="pl-8 pt-4 font-bold text-3xl">{`${name},${country}`}</h2>
        <p className="pl-8">weather: {details}</p>
        <h3 className="pl-8 pt-2 font-bold text-3xl">{temperatureValue}</h3>
        <div className="flex pl-8 text-sm gap-1">
          <button
            name="metric"
            onClick={handleUnitsChange}
            className="transition-transform duration-300 ease-out hover:scale-125 font-semibold"
          >
            °C
          </button>
          <p>|</p>
          <button
            name="imperial"
            onClick={handleUnitsChange}
            className="transition-transform duration-300 ease-out hover:scale-125 font-semibold"
          >
            °F
          </button>
          <div className="ml-5 w-full flex items-start">
            <p>{formatToLocalTime(dt, timezone)}</p>
          </div>
        </div>
      </div>
      <div className=" mr-20 flex items-center justify-end text-white ">
        <UilSun size={90} />
      </div>
    </div>
  );
};

export default Temperature;
