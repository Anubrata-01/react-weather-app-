import React from 'react'

const service = () => {
  return (
    <div>
        
    </div>
  )
}

export default service;
((value?.main?.temp)-m).toPrecision(3)
((value?.main?.feels_like)-m


import "./App.css"
import Input from "./components/Input";
import TimeLocation from "./components/Time&Location";
import Temp from "./components/Temp";
import React, {  useState } from "react";

function App() {
  const [data, setData] = useState();
  const [value, setValue] = useState([]);
  const [date, setDate] = useState();
  const [minute, setMinute] = useState();

  // useEffect(() => {
  //   // if (data === "Kolkata") {
  //     const fetchapi = async () => {
  //       const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=98364b843ead1950aa42f2208c579e7b&units=metrics`;
  //       const response = await fetch(url);
  //       const resJson = await response.json();
  //       setValue(resJson);
  //       getDate();
  //       getTime();
  //     };
  //     fetchapi();
  //   // }
  // }, [data]);
  // }
// console.log(value)
  const handlebtn = () => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=98364b843ead1950aa42f2208c579e7b&units=metrics`;
      const response = await fetch(url);
      const resJson = await response.json();
      setValue(resJson);
      getDate();
      getTime();
    };
    fetchapi();
  };

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    setDate(`${date}/${month}/${year}`);
  }

  function getTime() {
    const today = new Date();

    const hours = addZero(today.getHours());
    const minutes = addZero(today.getMinutes());
    const secondes = addZero(today.getSeconds());

    setMinute(`${hours}:${minutes}:${secondes}`);
  }
  console.log(value);
  const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
  // console.log(iconUrlFromCode(value?.weather[0]?.icon));

  return (
    <div className="App">
      <Input setData={setData} data={data} handlebtn={handlebtn} />
      {
        !data?(
          <p className="p">No Result</p>
        ):(<>

      <TimeLocation value={value} date={date} min={minute} />
      <Temp value={value} iconUrlFromCode={iconUrlFromCode(value?.weather[0]?.icon)}/>


        </>)
      }
    </div>
  );
}

export default App;
