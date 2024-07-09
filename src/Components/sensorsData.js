import axios from 'axios';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};

const getSafeReading = (data, key) => {
  const validItems = data.filter(item => item && item[key] != null);
  const lastItem = validItems[validItems.length - 1];
  return lastItem ? Number(lastItem[key]?.toFixed(15)) : 0;
};

const TemperatureReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/temperature');
const HumidityReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/humidity');
const TDSReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/WaterTds');
const TurReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/waterturbidity');
const WaterLevelReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/waterlevel');
const SoilMoistureReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/soilmoisture');
const FlameReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/flamesensor');
const MotionReading = await fetchData('https://backendgrad-eta.vercel.app/api/readings/motion');

const LPGReading = await fetchData('https://backendgrad-eta.vercel.app/api/gases/LPG');
const NH4Reading = await fetchData('https://backendgrad-eta.vercel.app/api/gases/NH4');
const COReading = await fetchData('https://backendgrad-eta.vercel.app/api/gases/CO');
const CH4Reading = await fetchData('https://backendgrad-eta.vercel.app/api/gases/CH4');
const H2Reading = await fetchData('https://backendgrad-eta.vercel.app/api/gases/H2');

const diseaseName = await fetchData('https://backendgrad-eta.vercel.app/api/Disease/disease');
const diseasePer = await fetchData('https://backendgrad-eta.vercel.app/api/Disease/diseaseper');

export const waterData = [
  {
    name: "Total Dissolved Solids",
    reading: `${getSafeReading(TDSReading, 'WaterTds')} ppm`
  },
  {
    name: "Turbidity",
    reading: `${getSafeReading(TurReading, 'WaterTurbidity')} NTU`
  },
  {
    name: "Water Level",
    reading: `${getSafeReading(WaterLevelReading, 'WaterLevel') *100}%`
  }
];

export const gasData = [
  {
    name: "LPG",
    reading: `${getSafeReading(LPGReading, 'LPG')} ppm`
  },
  {
    name: "NH4",
    reading: `${getSafeReading(NH4Reading, 'NH4')} ppm`
  },
  {
    name: "CO",
    reading: `${getSafeReading(COReading, 'CO')} ppm`
  },
  {
    name: "CH4",
    reading: `${getSafeReading(CH4Reading, 'CH4')} ppm`
  },
  {
    name: "H2",
    reading: `${getSafeReading(H2Reading, 'H2')} ppm`
  }
];

export const soilData = [
  {
    name: "Soil Moisture",
    reading: `${getSafeReading(SoilMoistureReading, 'SoilMoisture')}`
  }
];

export const otherData = [
  {
    name: "Temperature and Humidity",
    reading: {
      temperature: `${Math.round(TemperatureReading?.[TemperatureReading.length - 1]?.Temperature || 0)} C`,
      humidity: `${Math.round(HumidityReading?.[HumidityReading.length - 1]?.Humidity || 0)} %`
    }
  },
  {
    name: "Flame",
    reading: FlameReading?.[FlameReading.length - 1]?.FlameSensor || 'No Fire'
  },
  {
    name: "Motion",
    reading: MotionReading?.[MotionReading.length - 1]?.MotionSensor || 'No motion'
  }
];

export const AI = [
  {
    name: "Disease Name",
    reading: `${diseaseName?.[diseaseName.length - 1]?.DiseaseName || 'No disease data available'} and The Confidence: ${Math.round(diseasePer?.[diseasePer.length - 1]?.DiseasePer || 0)}%`
  }
];
