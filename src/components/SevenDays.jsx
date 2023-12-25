import {
  UilSun,
  UilCloudSun,
  UilCloudRain,
  UilCloudMoonShowers,
  UilCloudRainSun,
} from "@iconscout/react-unicons";
const SevenDays = () => {
  const Days = [
    {
      day: "Sun",
      weather: <UilSun className="text-white h-10 w-10" />,
      temp: "34°C | 27°C",
    },
    {
      day: "Mon",
      weather: <UilCloudSun className="text-white h-10 w-10" />,
      temp: "32°C | 27°C",
    },
    {
      day: "Tue",
      weather: <UilCloudRain className="text-white h-10 w-10" />,
      temp: "30°C | 27°C",
    },
    {
      day: "Wed",
      weather: <UilCloudMoonShowers className="text-white h-10 w-10" />,
      temp: "28°C | 27°C",
    },
    {
      day: "Thu",
      weather: <UilCloudRainSun className="text-white h-10 w-10" />,
      temp: "27° | 27°C",
    },
    {
      day: "Fri",
      weather: <UilCloudRainSun className="text-white h-10 w-10" />,
      temp: "32° | 24°C",
    },
    {
      day: "Sat",
      weather: <UilCloudRainSun className="text-white h-10 w-10" />,
      temp: "34° | 28°C",
    },
  ];

  return (
    <div className="h-[35rem] w-[250px] ml-5 mr-4 bg-dark-blue text-white flex flex-col  justify-between items-center rounded-xl">
      <h3 className="text-md flex justify-center items-center mt-2 font-bold">7-DAY FORECAST (invalid)</h3>
      {Days.map((Day, i) => (
        <div
          key={i}
          className="h-[5rem] w-max-[250px] flex justify-center items-center gap-4"
        >
          <p>{Day.day}</p>
          {Day.weather}
          <p>{Day.temp}</p>
        </div>
      ))}
    </div>
  );
};

export default SevenDays;
