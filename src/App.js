import "./App.css"
import Input from "./components/Input";
import TimeLocation from "./components/Time&Location";
import Temp from "./components/Temp";
import Header from "./components/Header";
import React, {useState } from "react";


function App() {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);
  const [date, setDate] = useState("");
  const [minute, setMinute] = useState("");
  const [weather,setWeather]=useState([]);
  const [error, setError] = useState("");

  const handlebtn = () => {
  
    const fetchapi = async () => {
      try{

      

      // }
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=98364b843ead1950aa42f2208c579e7b&units=metrics`;
      const response = await fetch(url);
      const resJson = await response.json();
      setValue(resJson);
      setWeather(resJson?.weather[0]);
      getDate();
      getTime();
      }catch(error){
        setError("**City not found**");
        // setValue();
        // setWeather();

      }
    
    };
    

    fetchapi();


  };
// console.log(weather?.icon);
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
  // console.log(value);
  
  const iconUrlFromCode = (cod) =>
  `http://openweathermap.org/img/wn/${cod}@2x.png`;

  return (
    <div className="App">
      <Header/>
      <Input setData={setData} data={data} handlebtn={handlebtn} />
      {
        !(data === value.name)?(
          <>
          <div className="msg">
          <p className="p">{error}</p>
           {/* <p>{error}</p> */}

          </div>
          {/* <p className="p">**No Result</p> */}
          
          </>
        ):(<>

      <TimeLocation value={value} date={date} min={minute} weather={weather} />
      <Temp value={value} weather={weather} iconUrlFromCode={iconUrlFromCode(weather.icon)} />


        </>)
      }
    </div>
  );
}

export default App;
// export {App , iconUrlFromCode};