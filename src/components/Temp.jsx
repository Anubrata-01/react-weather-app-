// import { ContentCopy } from '@mui/icons-material';
import React from "react";
// CiTempHigh
import { WiThermometer, WiHumidity, WiWindy } from "react-icons/wi";

const Temp = ({ value, iconUrlFromCode,weather }) => {
  return (
    <div className="temp">
      <div className="temp_det">
        <div className="img">
          <img src={iconUrlFromCode} alt="" className='w_image'/>

        </div>
        <div className="tempa">
          <span>{`${value?.main?.temp.toFixed()}°C`}</span>
        </div>
        <div className="details">
          <div className="real">
            <WiThermometer id="ui1" />
            Real fell :<span>{`${value?.main?.feels_like.toFixed()}°C`}</span>
          </div>
          <div className="humidity">
            <WiHumidity id="ui2" />
            Humidity :<span>{`${value?.main?.humidity.toFixed()}°C`}</span>
          </div>
          <div className="wind">
            <WiWindy id="ui3" />
            Wind :<span>{`${value?.wind?.speed.toFixed()}Km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
