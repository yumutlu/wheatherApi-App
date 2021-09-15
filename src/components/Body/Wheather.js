import React from "react";
import "./Wheather.css";
import { useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";

function Wheather() {
  const { city, weatherOfCurrentCity } = useContext(GlobalContext);

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(0);
  };

  let myDateArray = [];
  if (weatherOfCurrentCity) {
    for (let day = 0; day < 8; day++) {
      let date = new Date();
      date = date.getDate() + day;
      myDateArray.push(date);
    }
  }

  return (
    <>
      <div className="card-body">
        
        <div>
          <ul activeClassName="active" className="card-item">
            <h4 className="date">{weatherOfCurrentCity?.list[0].dt_txt}</h4>
            {/*           <h3>{myDateArray[0]}</h3>
             */}{" "}
            <li className="temp">
              {kelvinToFarenheit(weatherOfCurrentCity?.list[0].main.temp)}&deg;
              C
            </li>
            <li className="description">
              <h4>{weatherOfCurrentCity?.list[0].weather[0].description}</h4>
              <img
                src={`http://openweathermap.org/img/w/${weatherOfCurrentCity?.list[0].weather[0].icon}.png`}
                alt="icon"
              />
            </li>
            <li className="min-max-temp">
              {kelvinToFarenheit(weatherOfCurrentCity?.list[0].main.temp_min)}
              &deg;C /
              {kelvinToFarenheit(weatherOfCurrentCity?.list[0].main.temp_min)}
              &deg;C
            </li>
          </ul>
        </div>
        <div>
          <ul className="card-item">
            <h4 className="date">{weatherOfCurrentCity?.list[4].dt_txt}</h4>
            {/*           <h3>{myDateArray[0]}</h3>
             */}{" "}
            <li className="temp">
              {kelvinToFarenheit(weatherOfCurrentCity?.list[4].main.temp)}&deg;
              C
            </li>
            <li className="description">
              <h4>{weatherOfCurrentCity?.list[4].weather[0].description}</h4>
              <img
                src={`http://openweathermap.org/img/w/${weatherOfCurrentCity?.list[4].weather[0].icon}.png`}
                alt="icon"
              />
            </li>
            <li className="min-max-temp">
              {kelvinToFarenheit(weatherOfCurrentCity?.list[4].main.temp_min)}
              &deg;C /
              {kelvinToFarenheit(weatherOfCurrentCity?.list[4].main.temp_min)}
              &deg;C
            </li>
          </ul>
        </div>
        <div>
          <ul activeClassName="active" className="card-item">
            <h4 className="date">{weatherOfCurrentCity?.list[11].dt_txt}</h4>
            {/*           <h3>{myDateArray[0]}</h3>
             */}{" "}
            <li className="temp">
              {kelvinToFarenheit(weatherOfCurrentCity?.list[11].main.temp)}&deg;
              C
            </li>
            <li className="description">
              <h4>{weatherOfCurrentCity?.list[11].weather[0].description}</h4>
              <img
                src={`http://openweathermap.org/img/w/${weatherOfCurrentCity?.list[11].weather[0].icon}.png`}
                alt="icon"
              />
            </li>
            <li className="min-max-temp">
              {kelvinToFarenheit(weatherOfCurrentCity?.list[11].main.temp_min)}
              &deg;C /
              {kelvinToFarenheit(weatherOfCurrentCity?.list[11].main.temp_min)}
              &deg;C
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
}

export default Wheather;
