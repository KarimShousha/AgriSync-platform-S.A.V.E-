// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TemperatureReading = await axios.get('https://project-save.vercel.app/api/readings/temperature');
// const HumidityReading = await axios.get('https://project-save.vercel.app/api/readings/humidity');
// const TDSReading = await axios.get('https://project-save.vercel.app/api/readings/WaterTds');
// const TurReading = await axios.get('https://project-save.vercel.app/api/readings/waterturbidity');
// const WaterLevelReading = await axios.get('https://project-save.vercel.app/api/readings/waterlevel');
// const SoilMoistureReading = await axios.get('https://project-save.vercel.app/api/readings/soilmoisture');
// const FlameReading = await axios.get('https://project-save.vercel.app/api/readings/flamesensor');
// const MotionReading = await axios.get('https://project-save.vercel.app/api/readings/motion');

// const LPGReading = await axios.get('https://project-save.vercel.app/api/gases/LPG');
// const NH4Reading = await axios.get('https://project-save.vercel.app/api/gases/NH4');
// const COReading = await axios.get('https://project-save.vercel.app/api/gases/CO');
// const CH4Reading = await axios.get('https://project-save.vercel.app/api/gases/CH4');
// const H2Reading = await axios.get('https://project-save.vercel.app/api/gases/H2');

// const diseaseName = await axios.get('https://project-save.vercel.app/api/controls/disease');
// const diseasePer = await axios.get('https://project-save.vercel.app/api/controls/diseaseper');

// const getSafeReading = (data, key) => {
//   const lastItem = data?.[data.length - 1];
//   return lastItem ? Number(lastItem[key]?.toFixed(7)) : 0;
// };

// export const waterData = [
//   {
//     name: "Total Dissolved Solids",
//     reading: getSafeReading(TDSReading.data, 'WaterTds')
//   },
//   {
//     name: "Turbidity",
//     reading: getSafeReading(TurReading.data, 'WaterTurbidity')
//   },
//   {
//     name: "Water Level",
//     reading: getSafeReading(WaterLevelReading.data, 'WaterLevel')
//   }
// ];

// export const gasData = [
//   {
//     name: "LPG",
//     reading: getSafeReading(LPGReading.data, 'LPG')
//   },
//   {
//     name: "NH4",
//     reading: getSafeReading(NH4Reading.data, 'NH4')
//   },
//   {
//     name: "CO",
//     reading: getSafeReading(COReading.data, 'CO')
//   },
//   {
//     name: "CH4",
//     reading: getSafeReading(CH4Reading.data, 'CH4')
//   },
//   {
//     name: "H2",
//     reading: getSafeReading(H2Reading.data, 'H2')
//   }
// ];

// export const soilData = [
//   {
//     name: "Soil Moisture",
//     reading: getSafeReading(SoilMoistureReading.data, 'SoilMoisture')
//   }
// ];

// export const otherData = [
//   {
//     name: "Temperature and Humidity",
//     reading: {
//       temperature: Math.round(TemperatureReading.data?.[TemperatureReading.data.length - 1]?.Temperature || 0),
//       humidity: Math.round(HumidityReading.data?.[HumidityReading.data.length - 1]?.Humidity || 0)
//     }
//   },
//   {
//     name: "Flame",
//     reading: FlameReading.data?.[FlameReading.data.length - 1]?.FlameSensor || 'No flame data available'
//   },
//   {
//     name: "Motion",
//     reading: MotionReading.data?.[MotionReading.data.length - 1]?.MotionSensor || 'No motion'
//   }
// ];

// export const AI = [
//   {
//     name: "Disease Name",
//     reading: `${diseaseName.data?.[diseaseName.data.length - 1]?.DiseaseName || 'No disease data available'} and The Confidence: ${Math.round(diseasePer.data?.[diseasePer.data.length - 1]?.DiseasePer || 0)}%`
//   }
// ];





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemperatureReading = await axios.get('https://project-save.vercel.app/api/readings/temperature');
const HumidityReading = await axios.get('https://project-save.vercel.app/api/readings/humidity');
const TDSReading = await axios.get('https://project-save.vercel.app/api/readings/WaterTds');
const TurReading = await axios.get('https://project-save.vercel.app/api/readings/waterturbidity');
const WaterLevelReading = await axios.get('https://project-save.vercel.app/api/readings/waterlevel');
const SoilMoistureReading = await axios.get('https://project-save.vercel.app/api/readings/soilmoisture');
const FlameReading = await axios.get('https://project-save.vercel.app/api/readings/flamesensor');
const MotionReading = await axios.get('https://project-save.vercel.app/api/readings/motion');

const LPGReading = await axios.get('https://project-save.vercel.app/api/gases/LPG');
const NH4Reading = await axios.get('https://project-save.vercel.app/api/gases/NH4');
const COReading = await axios.get('https://project-save.vercel.app/api/gases/CO');
const CH4Reading = await axios.get('https://project-save.vercel.app/api/gases/CH4');
const H2Reading = await axios.get('https://project-save.vercel.app/api/gases/H2');

const diseaseName = await axios.get('https://project-save.vercel.app/api/Disease/disease');
const diseasePer = await axios.get('https://project-save.vercel.app/api/Disease/diseaseper');

const getSafeReading = (data, key) => {
  // Filter out empty objects and objects that don't have the key
  const validItems = data.filter(item => item && item[key] != null);
  const lastItem = validItems[validItems.length - 1];
  return lastItem ? Number(lastItem[key]?.toFixed(15)) : 0;
};

export const waterData = [
  {
    name: "Total Dissolved Solids",
    reading: getSafeReading(TDSReading.data, 'WaterTds')
  },
  {
    name: "Turbidity",
    reading: getSafeReading(TurReading.data, 'WaterTurbidity')
  },
  {
    name: "Water Level",
    reading: getSafeReading(WaterLevelReading.data, 'WaterLevel')
  }
];

export const gasData = [
  {
    name: "LPG",
    reading: getSafeReading(LPGReading.data, 'LPG')
  },
  {
    name: "NH4",
    reading: getSafeReading(NH4Reading.data, 'NH4')
  },
  {
    name: "CO",
    reading: getSafeReading(COReading.data, 'CO')
  },
  {
    name: "CH4",
    reading: getSafeReading(CH4Reading.data, 'CH4')
  },
  {
    name: "H2",
    reading: getSafeReading(H2Reading.data, 'H2')
  }
];

export const soilData = [
  {
    name: "Soil Moisture",
    reading: getSafeReading(SoilMoistureReading.data, 'SoilMoisture')
  }
];

export const otherData = [
  {
    name: "Temperature and Humidity",
    reading: {
      temperature: Math.round(TemperatureReading.data?.[TemperatureReading.data.length - 1]?.Temperature || 0),
      humidity: Math.round(HumidityReading.data?.[HumidityReading.data.length - 1]?.Humidity || 0)
    }
  },
  {
    name: "Flame",
    reading: FlameReading.data?.[FlameReading.data.length - 1]?.FlameSensor || 'No flame data available'
  },
  {
    name: "Motion",
    reading: MotionReading.data?.[MotionReading.data.length - 1]?.MotionSensor || 'No motion'
  }
];

export const AI = [
  {
    name: "Disease Name",
    reading: `${diseaseName.data?.[diseaseName.data.length - 1]?.DiseaseName || 'No disease data available'} and The Confidence: ${Math.round(diseasePer.data?.[diseasePer.data.length - 1]?.DiseasePer || 0)}%`
  }
];
