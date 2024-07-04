
import { Fragment } from "react";
import { useState, useEffect } from "react";
import NavButtons from "./NavButtons";
import MotionButton from "./MotionButton.jsx";
import axios from 'axios';

import { gasData, waterData, soilData, otherData, AI } from "./sensorsData.js";
import './css/SensorCard.css';
import ReadingIcon from "./ReadingIcon.jsx";

export default function SensorCard({ name, sensorArr }) {
  const [state, setState] = useState(undefined);
  const [content, setContent] = useState('Please select a sensor.');
  const [sensorName, setSensorName] = useState('');

  const handleButton = (buttonName) => {
    setState(buttonName);
    console.log(buttonName);
  };

  const handleClickContent = (newContent, sensorName) => {
    setSensorName(sensorName);
    if (sensorName === 'Motion') {
      setContent(newContent);
    } else if (typeof newContent === 'object' && newContent.temperature && newContent.humidity) {
      setContent(`Temperature: ${newContent.temperature}, Humidity: ${newContent.humidity}`);
    } else if (sensorArr !== gasData && sensorArr !== waterData) {
      setContent(newContent);
    } else if (sensorName === 'Disease Detection') {
      setContent(`Disease Name: ${newContent.reading}, Percentage: ${newContent.Percentage}`);
    } else {
      setContent(newContent);
    }
  };

  const [reading, setReading] = useState('No Motion');

  const handleDismissAlert = () => {
    setReading('No Motion');
  };

  let readingvalue = content;

  if (state) {
    readingvalue = content;
  } else {
    readingvalue = content;
  }

  return (
    <div className="cardContainer">
      <h3>{name}</h3>
      <ul>
        <div className="card-button-container">
          {sensorArr.map(item => (
            <li key={item.name}>
              {item.name === 'Motion' ? (
                <MotionButton
                  isActive={state === "Motion"}
                  name={"Motion"}
                  onClick={() => {
                    handleButton("Motion");
                    handleClickContent(otherData[2].reading, "Motion");
                    setReading(otherData[2].reading);
                  }}
                  reading={otherData[2].reading}
                  onDismiss={handleDismissAlert}
                  normalTitle={`Motion: ${otherData[2].reading}`}
                />
              ) : (
                <NavButtons
                  isActive={state === item.name}
                  name={item.name}
                  onClick={() => {
                    handleButton(item.name);
                    handleClickContent(item.reading, item.name);
                  }}
                />
              )}
            </li>
          ))}
        </div>
      </ul>
      <div className="normal-title-container" style={{ marginLeft: '0.8rem', marginTop: '3rem', color:"#ffa500" }}>
        {sensorName ? `${sensorName} : ${readingvalue}` : 'Please select a sensor.'}
      </div>



    
    </div>

    
  );
}

