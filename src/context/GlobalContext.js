import { useState, createContext, useEffect } from "react";
import axios from "axios";

const GloabalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [city, setCity] = useState("istanbul");
  const [weatherOfCurrentCity, setWeatherOfCurrentCity] = useState(undefined);

  const values = { weatherOfCurrentCity, setWeatherOfCurrentCity, city, setCity };

  const apiKey = "97024f6ab7257e20d6d4756b1c896785";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metrics&lang=tr`;

  useEffect(() => {
    const fetchData = async () => {
      return await axios.get(apiUrl).then((res) => setWeatherOfCurrentCity(res.data));
    };
    fetchData();
    console.log("weatherOfCurrentCity",weatherOfCurrentCity)
  }, [city]);

  return (
    <div>
      <GloabalContext.Provider value={values}>
        {children}
      </GloabalContext.Provider>
    </div>
  );
};

export default GloabalContext;
