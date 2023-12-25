import {
  UilTemperature,
  UilWind,
  UilRaindrops,
  UilBrightness,
  UilCompressArrows,
  UilSnowflake,
  UilThunderstorm,
} from "@iconscout/react-unicons";

const AirConditions = ({
  weather: { speed, humidity, feels_like, pressure }, units, setUnits, }) => {
  const convertSpeed = (speed, unit) => {
    if (unit === "metric") {
      return `${speed}km/h`;
    } else if (unit === "imperial") {
      return `${speed}m/h`;
    }
  };

  const temperatureUnit = (feels_like, unit) => {
    if (unit === "metric") {
      return `${feels_like}°C`;
    } else if (unit === "imperial") {
      return `${feels_like}°F`;
    }
  };

  const speedValue = convertSpeed(speed, units);
  const temperatureValue = temperatureUnit(feels_like, units);

  const Conditions = [
    {
      icon: <UilTemperature size="30" color="#fff" />,
      label: "Real Feel",
      value: temperatureValue,
    },
    {
      icon: <UilWind size="30" color="#fff" />,
      label: "Wind",
      value: speedValue,
    },
    {
      icon: <UilRaindrops size="30" color="#fff" />,
      label: "Humidity",
      value: `${humidity} %`,
    },
    {
      icon: <UilCompressArrows size="30" color="#fff" />,
      label: "Pressure",
      value: `${pressure}`,
    },
  ];

  return (
    <div className="bg-dark-blue text-white h-40 w-120 rounded-lg overflow-auto">
      <h3 className="ml-2 mt-1 text-sm font-bold">AIR CONDITIONS</h3>
      <div className=" h-[120px] w-120 flex items-center justify-between">
        {Conditions.map((condition, i) => (
          <div key={i} className="flex justify-center items-center gap-2 w-36">
            {condition.icon}
            <div className="text-center flex flex-col">
              <p>{condition.label}</p>
              <p className="font-bold text-xl">{condition.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;
