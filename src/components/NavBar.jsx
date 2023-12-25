import { useState, useEffect } from "react";
import {
  UilMap,
  UilCloudSunHail,
  UilListUl,
  UilSlidersVAlt,
} from "@iconscout/react-unicons";

const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState("cloudSunHail");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName === activeIcon ? null : iconName);
  };

  useEffect(() => {}, []);

  return (
    <div className="h-[35rem] w-[100px] ml-4 bg-dark-blue flex flex-col items-center rounded-xl text-white">
      <div className="mt-4 flex flex-col gap-12">
        <div className="flex items-center justify-center shadow-xl shadow-black-400 rounded-lg">
          <img
            src="public/images/cloudysun.png"
            alt="logo"
            className="ml-3 h-10 w-10"
          />
        </div>
        <div
          onClick={() => handleIconClick("cloudSunHail")}
          className={`cursor-pointer flex justify-center items-center flex-col transition-transform duration-200 ease-in ${
            activeIcon === "cloudSunHail" ? "scale-125" : ""
          }`}
        >
          <UilCloudSunHail size={30} />
          Weather
        </div>
        <div
          onClick={() => handleIconClick("listUl")}
          className={`cursor-pointer flex justify-center items-center flex-col transition-transform duration-200 ease-in ${
            activeIcon === "listUl" ? "scale-125" : ""
          }`}
        >
          <UilListUl size={30} />
          Cities
        </div>
        <div
          onClick={() => handleIconClick("map")}
          className={`cursor-pointer flex justify-center items-center flex-col transition-transform duration-200 ease-in ${
            activeIcon === "map" ? "scale-125" : ""
          }`}
        >
          <UilMap size={30} />
          Map
        </div>
      </div>
    </div>
  );
};

export default NavBar;
