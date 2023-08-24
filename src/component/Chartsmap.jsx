import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryMap from "./CountryMap";

const Chartsmap = () => {

  const [CountryData, setCountryData] = useState([]);
  const [WorldData, setWorldData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((resp) => resp.json())
      .then((WorlData) => setWorldData(WorlData));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center border-2 border-black w-[91.2vw]">
      <Link to="map"></Link>
      <div className="flex flex-col justify-evenly w-[45vw] h-[20vh]">
        <h1 className="text-center font-bold text-2xl text-green-600 shadow-xl shadow-emerald-500/50">World Wide Cases</h1>
        <div className="m-auto">
        <div><h1>Active: <span className="font-bold text-xl">{WorldData.updated}</span></h1></div>
        <div><h1>Deaths: <span className="font-bold text-xl">{WorldData.deaths}</span></h1></div>
        <div><h1>Recovered: <span className="font-bold text-xl">{WorldData.recovered}</span></h1></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-2 border-black w-[85vw] h-[70vh]">
        <CountryMap data={CountryData}></CountryMap>
      </div>
    </div>
  );
};

export default Chartsmap;
