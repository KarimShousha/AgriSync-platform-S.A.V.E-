// worksssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
// import { Fragment } from "react";
// import NavButtons from "./NavButtons";
// import { useState, useEffect } from "react";
// import {gasData} from "./sensorsData.js";
// import {waterData} from "./sensorsData.js";
// import {soilData} from "./sensorsData.js";
// import {otherData} from "./sensorsData.js";
// import MotionButton from "./MotionButton.jsx";
// import{test} from "./sensorsData.js";
// import{test2} from "./sensorsData.js";
// import axios from 'axios';

// import './css/SensorCard.css'
// import ReadingIcon from "./ReadingIcon.jsx";

// export default function SensorCard({name, sensorArr}){


//   let [state, setState] = useState(undefined)
//   function handleButton(ButtonName){
//     setState(ButtonName);
//     console.log(ButtonName)
//   }

//   let [content, setContent] = useState('Please select a sensor.');
//   function handleClickContent(newContent, sensorName){
//     if (sensorName === 'Motion') {
//       setContent(`Motion : ${newContent}`);
//       setReading(newContent);
//     } else if (typeof newContent === 'object' && newContent.temperature && newContent.humidity) {
//       setContent(`Temperature: ${newContent.temperature}, Humidity: ${newContent.humidity}`);
//     } else if (sensorArr !== gasData && sensorArr !== waterData) {
//       setContent(`${sensorName} is: ${newContent}`);
//     } else {
//       setContent(newContent);
//     }
//   };

//   const [reading, setReading] = useState('No Motion');

//   function handleDismissAlert() {
//     setReading('No Motion');
//   }

// let readingvalue = content;

// if (state){
//   if(sensorArr === gasData || sensorArr === waterData){
//     readingvalue = content;
//   }
//   else{
//     readingvalue = content;
//   }
// }
// else{
//   readingvalue= content;
// }

// return(
// <div className="cardContainer">
// <h3>{name}</h3>
// <ul>
// <div className="card-button-container">
// {sensorArr.map(item => (
// <li>
//   {item.name === 'Motion' ? (
//    <MotionButton
//     isActive={state === "Motion"}
//     name={"Motion"}
//     onClick={() => {
//         handleButton("Motion"); 
//         handleClickContent(otherData[2].reading, "Motion"); 
//         setReading(otherData[2].reading);
//     }}
//     reading={otherData[2].reading}
//     onDismiss={handleDismissAlert}
//     normalTitle={`Motion is: ${otherData[2].reading}`}
// />


//   ) : (
//     <NavButtons isActive={state === item.name} name={item.name} onClick={() => {handleButton(item.name); handleClickContent(item.reading, item.name);}}/>
//   )}
// </li>
// ))} 
// </div>
// </ul>
// <div className="normal-title-container " style={{color:'white' , marginLeft:'2.5rem', marginTop:'3rem'}}>
// {state === "Motion"  ? `Motion : ${reading}` : readingvalue}
// </div>
// </div>

// );
// }

//workssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss2222222222222222222222222222222222222
// import { Fragment } from "react";
// import NavButtons from "./NavButtons";
// import { useState, useEffect } from "react";
// import { gasData } from "./sensorsData.js";
// import { waterData } from "./sensorsData.js";
// import { soilData } from "./sensorsData.js";
// import { otherData } from "./sensorsData.js";
// import MotionButton from "./MotionButton.jsx";
// import { AI } from "./sensorsData.js";
// import { test2 } from "./sensorsData.js";
// import axios from 'axios';

// import './css/SensorCard.css';
// import ReadingIcon from "./ReadingIcon.jsx";

// export default function SensorCard({ name, sensorArr }) {
//   const [state, setState] = useState(undefined);
//   const [content, setContent] = useState('Please select a sensor.');
//   const [sensorName, setSensorName] = useState('');

//   const handleButton = (buttonName) => {
//     setState(buttonName);
//     console.log(buttonName);
//   };

//   const handleClickContent = (newContent, sensorName) => {
//     setSensorName(sensorName);
//     if (sensorName === 'Motion') {
//       setContent(newContent);
//     } else if (typeof newContent === 'object' && newContent.temperature && newContent.humidity) {
//       setContent(`Temperature: ${newContent.temperature}, Humidity: ${newContent.humidity}`);
//     } else if (sensorArr !== gasData && sensorArr !== waterData) {
//       setContent(newContent);
//     } else {
//       setContent(newContent);
//     }
//   };

//   const [reading, setReading] = useState('No Motion');

//   const handleDismissAlert = () => {
//     setReading('No Motion');
//   };

//   let readingvalue = content;

//   if (state) {
//     readingvalue = content;
//   } else {
//     readingvalue = content;
//   }

//   return (
//     <div className="cardContainer">
//       <h3>{name}</h3>
//       <ul>
//         <div className="card-button-container">
//           {sensorArr.map(item => (
//             <li key={item.name}>
//               {item.name === 'Motion' ? (
//                 <MotionButton
//                   isActive={state === "Motion"}
//                   name={"Motion"}
//                   onClick={() => {
//                     handleButton("Motion");
//                     handleClickContent(otherData[2].reading, "Motion");
//                     setReading(otherData[2].reading);
//                   }}
//                   reading={otherData[2].reading}
//                   onDismiss={handleDismissAlert}
//                   normalTitle={`Motion: ${otherData[2].reading}`}
//                 />
//               ) : (
//                 <NavButtons
//                   isActive={state === item.name}
//                   name={item.name}
//                   onClick={() => {
//                     handleButton(item.name);
//                     handleClickContent(item.reading, item.name);
//                   }}
//                 />
//               )}
//             </li>
//           ))}
//         </div>
//       </ul>
//       <div className="normal-title-container" style={{ color: 'white', marginLeft: '2.5rem', marginTop: '3rem' }}>
//         {sensorName ? `${sensorName} : ${readingvalue}` : 'Please select a sensor.'}
//       </div>
//     </div>
//   );
// }

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
      <div className="normal-title-container" style={{ marginLeft: '2.5rem', marginTop: '3rem', color:"#ffa500" }}>
        {sensorName ? `${sensorName} : ${readingvalue}` : 'Please select a sensor.'}
      </div>
    </div>
  );
}

