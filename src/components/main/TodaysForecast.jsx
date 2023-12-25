import {
  UilSun,
  UilCloudSun,
  UilCloudRain,
  UilCloudMoonShowers,
  UilCloudRainSun,
} from "@iconscout/react-unicons";

const TodaysForecast = () => {
  const Hours = [
    {
      time: "1:00 PM",
      weather: <UilSun className="text-white h-10 w-10" />,
      temp: "34°C",
    },
    {
      time: "2:00 PM",
      weather: <UilCloudSun className="text-white h-10 w-10" />,
      temp: "32°C",
    },
    {
      time: "3:00 PM",
      weather: <UilCloudRain className="text-white h-10 w-10" />,
      temp: "30°C",
    },
    {
      time: "4:00 PM",
      weather: <UilCloudMoonShowers className="text-white h-10 w-10" />,
      temp: "28°C",
    },
    {
      time: "5:00 PM",
      weather: <UilCloudRainSun className="text-white h-10 w-10" />,
      temp: "27°C",
    },
  ];

  return (
    <div className="bg-dark-blue text-white h-40 w-120 rounded-lg flex flex-col">
      <h3 className="ml-2 mt-1 text-sm font-bold">
        TODAY'S FORECAST (invalid = API subscription needed.)
      </h3>
      <div className="h-[120px] w-120 ml-2 mr-2 mt-3 flex items-center justify-between">
        {Hours.map((hour, i) => (
          <div
            key={i}
            className="h-[120px] w-24 flex flex-col gap-4 items-center"
          >
            <p>{hour.time}</p>
            {hour.weather}
            <p className="font-bold text-xl">{hour.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysForecast;
