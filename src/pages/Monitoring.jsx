import SensorCard from "../Components/SensorCard";
import { Fragment } from "react";
import {gasData} from '../Components/sensorsData.js';
import {waterData} from '../Components/sensorsData.js';
import {soilData} from '../Components/sensorsData.js';
import {otherData} from '../Components/sensorsData.js';
import {AI} from '../Components/sensorsData.js';
import "../Components/css/MonitoringPage.css"

export default function Monitoring(){
  return(
    <Fragment>
      <div className="Monitoring-container">
      <SensorCard name="Gas Data" sensorArr={gasData} />
      <SensorCard name="Water Data" sensorArr={waterData} />
      <SensorCard name="Soil Data" sensorArr={soilData} />
      <SensorCard name="Other Data" sensorArr={otherData} /> 
      <SensorCard name="Disease Check" sensorArr={AI} /> 

       </div>
      </Fragment>
  );

}